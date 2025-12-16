/**
 * Sync errors from the EZ language repo's ERRORS.md file.
 *
 * This script:
 * 1. Fetches ERRORS.md from the EZ repo (or reads from local path)
 * 2. Parses the markdown tables to extract error codes
 * 3. Merges with local enrichments (howToFix, examples, etc.)
 * 4. Outputs the final errors.json
 *
 * Usage:
 *   node scripts/sync-errors.js                    # Fetch from GitHub
 *   node scripts/sync-errors.js --local ../EZ     # Read from local repo
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, '../src/data');

const ERRORS_MD_URL = 'https://raw.githubusercontent.com/SchoolyB/EZ/main/ERRORS.md';

// Category mapping from section headers to category IDs
const CATEGORY_MAP = {
  'Lexer Errors': { id: 'lexer', range: 'E1xxx' },
  'Parse Errors': { id: 'parse', range: 'E2xxx' },
  'Type Errors': { id: 'type', range: 'E3xxx' },
  'Reference Errors': { id: 'reference', range: 'E4xxx' },
  'Runtime Errors': { id: 'runtime', range: 'E5xxx' },
  'Import Errors': { id: 'import', range: 'E6xxx' },
  'Stdlib Errors': { id: 'stdlib', range: 'E7xxx' },
  'Math Errors': { id: 'math', range: 'E8xxx' },
  'Array Errors': { id: 'array', range: 'E9xxx' },
  'String Errors': { id: 'string', range: 'E10xxx' },
  'Time Errors': { id: 'time', range: 'E11xxx' },
  'Map Errors': { id: 'map', range: 'E12xxx' },
  'JSON Errors': { id: 'json', range: 'E13xxx' },
  'Code Style Warnings': { id: 'warnings-style', range: 'W1xxx' },
  'Potential Bug Warnings': { id: 'warnings-bugs', range: 'W2xxx' },
  'Code Quality Warnings': { id: 'warnings-quality', range: 'W3xxx' },
  'Module Warnings': { id: 'warnings-module', range: 'W4xxx' },
};

/**
 * Fetch ERRORS.md content from GitHub or local file
 */
async function fetchErrorsMd(localPath) {
  if (localPath) {
    const filePath = resolve(localPath, 'ERRORS.md');
    console.log(`Reading from local file: ${filePath}`);
    return readFileSync(filePath, 'utf-8');
  }

  console.log(`Fetching from: ${ERRORS_MD_URL}`);
  const response = await fetch(ERRORS_MD_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch ERRORS.md: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

/**
 * Parse ERRORS.md content into structured data
 */
function parseErrorsMd(content) {
  const lines = content.split('\n');
  const errors = [];
  const categories = new Map();

  let currentCategory = null;
  let currentDescription = '';
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for section headers (## Category Name (Exxx))
    const headerMatch = line.match(/^## (.+?) \(([EW]\d+x+(?:-[EW]\d+x+)?)\)/);
    if (headerMatch) {
      const [, name, range] = headerMatch;

      // Get description from next non-empty line
      let desc = '';
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine && !nextLine.startsWith('|') && !nextLine.startsWith('#')) {
          desc = nextLine;
          break;
        }
        if (nextLine.startsWith('|') || nextLine.startsWith('#')) break;
      }

      // Find category ID from map or generate one
      const categoryInfo = Object.entries(CATEGORY_MAP).find(([key]) =>
        name.includes(key) || key.includes(name.replace(' Errors', '').replace(' Warnings', ''))
      );

      const categoryId = categoryInfo
        ? categoryInfo[1].id
        : name.toLowerCase().replace(/\s+/g, '-').replace('-errors', '').replace('-warnings', '');

      currentCategory = {
        id: categoryId,
        name,
        range,
        description: desc
      };

      if (!categories.has(categoryId)) {
        categories.set(categoryId, currentCategory);
      }

      inTable = false;
      continue;
    }

    // Check for table rows
    if (line.startsWith('|') && currentCategory) {
      // Skip header row and separator
      if (line.includes('Code') && line.includes('Type') && line.includes('Message')) {
        inTable = true;
        continue;
      }
      if (line.match(/^\|[-\s|]+\|$/)) {
        continue;
      }

      if (inTable) {
        // Parse table row: | E1001 | illegal-character | illegal character in source |
        const cells = line.split('|').map(c => c.trim()).filter(c => c);
        if (cells.length >= 3) {
          const [code, slug, message] = cells;

          // Validate it looks like an error code
          if (code.match(/^[EW]\d+$/)) {
            errors.push({
              code,
              slug,
              message,
              category: currentCategory.id
            });
          }
        }
      }
    }
  }

  return {
    errors,
    categories: Array.from(categories.values())
  };
}

/**
 * Merge parsed errors with local enrichments
 */
function mergeWithEnrichments(parsed, enrichments) {
  const mergedErrors = parsed.errors.map(error => {
    const enrichment = enrichments[error.code] || {};

    return {
      code: error.code,
      slug: error.slug,
      message: error.message,
      category: error.category,
      usedFor: enrichment.usedFor || '',
      example: enrichment.example || error.message,
      howToFix: enrichment.howToFix || '',
      relatedErrors: enrichment.relatedErrors || [],
      ...(enrichment.suppressible && { suppressible: enrichment.suppressible })
    };
  });

  // Consolidate warning categories into single "warnings" category for display
  const consolidatedCategories = [];
  const warningCategories = parsed.categories.filter(c => c.id.startsWith('warnings'));
  const nonWarningCategories = parsed.categories.filter(c => !c.id.startsWith('warnings'));

  consolidatedCategories.push(...nonWarningCategories);

  if (warningCategories.length > 0) {
    consolidatedCategories.push({
      id: 'warnings',
      name: 'Warnings',
      range: 'W1xxx-W4xxx',
      description: 'Warnings (non-fatal)'
    });

    // Update error categories to use consolidated 'warnings' id
    mergedErrors.forEach(e => {
      if (e.category.startsWith('warnings')) {
        e.category = 'warnings';
      }
    });
  }

  return {
    categories: consolidatedCategories,
    errors: mergedErrors
  };
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const localIndex = args.indexOf('--local');
  const localPath = localIndex !== -1 ? args[localIndex + 1] : null;

  try {
    // Fetch/read ERRORS.md
    const content = await fetchErrorsMd(localPath);

    // Parse the markdown
    console.log('Parsing ERRORS.md...');
    const parsed = parseErrorsMd(content);
    console.log(`Found ${parsed.errors.length} errors in ${parsed.categories.length} categories`);

    // Load enrichments
    const enrichmentsPath = resolve(DATA_DIR, 'error-enrichments.json');
    let enrichments = {};
    try {
      enrichments = JSON.parse(readFileSync(enrichmentsPath, 'utf-8'));
      console.log(`Loaded ${Object.keys(enrichments).length} enrichments`);
    } catch (e) {
      console.log('No enrichments file found, using defaults');
    }

    // Merge data
    const merged = mergeWithEnrichments(parsed, enrichments);

    // Find new errors (in parsed but not in enrichments)
    const newErrors = parsed.errors.filter(e => !enrichments[e.code]);
    if (newErrors.length > 0) {
      console.log(`\nNew errors without enrichments (${newErrors.length}):`);
      newErrors.forEach(e => console.log(`  - ${e.code}: ${e.slug}`));
    }

    // Write output
    const outputPath = resolve(DATA_DIR, 'errors.json');
    writeFileSync(outputPath, JSON.stringify(merged, null, 2));
    console.log(`\nWrote ${outputPath}`);
    console.log(`Total: ${merged.errors.length} errors, ${merged.categories.length} categories`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
