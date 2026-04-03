import * as fs from 'fs';
import * as path from 'path';
import { CodeAnalyzer } from './analyzer/jsAnalyzer.js';

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: codebudget <filename>');
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const code = fs.readFileSync(filePath, 'utf-8');
  const analyzer = new CodeAnalyzer();

  try {
    const estimates = analyzer.analyze(code);
    
    console.log('\n=== CODEBUDGET ESTIMATION REPORT ===');
    console.log(`File: ${path.basename(filePath)}`);
    console.log('------------------------------------');

    if (estimates.length === 0) {
      console.log('No functions found to analyze.');
    }

    estimates.forEach(est => {
      console.log(`Function: ${est.functionName}`);
      console.log(`- Complexity: ${est.complexity}`);
      console.log(`- Est. Duration: ${est.estimatedDurationMs}ms`);
      console.log(`- Memory: ${est.memoryMb}MB`);
      console.log(`- Est. Cost (per 1M calls): $${est.costPerMillionInvocations.toFixed(4)} ${est.currency}`);
      console.log('------------------------------------');
    });

  } catch (err: any) {
    console.error('Error analyzing file:', err.message);
  }
}

main();
