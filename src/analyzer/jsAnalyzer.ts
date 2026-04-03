import * as acorn from 'acorn';
import { CostEstimate } from '../core/types.js';
import { calculateLambdaCost } from '../pricing/engine.js';

export class CodeAnalyzer {
  analyze(code: string): CostEstimate[] {
    const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: 'module' });
    const estimates: CostEstimate[] = [];

    // Simple traversal to find function declarations
    const body = (ast as any).body;
    for (const node of body) {
      if (node.type === 'FunctionDeclaration') {
        estimates.push(this.analyzeFunction(node));
      }
    }

    return estimates;
  }

  private analyzeFunction(node: any): CostEstimate {
    const functionName = node.id.name;
    let loopCount = 0;
    let nestingLevel = 0;
    let maxNesting = 0;

    // Recursive search for loops
    const walk = (n: any, level: number) => {
      if (!n) return;
      
      const isLoop = ['ForStatement', 'WhileStatement', 'DoWhileStatement', 'ForInStatement', 'ForOfStatement'].includes(n.type);
      if (isLoop) {
        loopCount++;
        maxNesting = Math.max(maxNesting, level + 1);
      }

      // Check children
      for (const key in n) {
        const child = n[key];
        if (Array.isArray(child)) {
          child.forEach(c => walk(c, isLoop ? level + 1 : level));
        } else if (child && typeof child === 'object' && child.type) {
          walk(child, isLoop ? level + 1 : level);
        }
      }
    };

    walk(node.body, 0);

    // Heuristics for complexity
    let complexity = 'O(1)';
    if (maxNesting === 1) complexity = 'O(n)';
    else if (maxNesting === 2) complexity = 'O(n^2)';
    else if (maxNesting > 2) complexity = `O(n^${maxNesting})`;

    // Heuristics for duration (base 10ms + 50ms per nesting level)
    const estimatedDurationMs = 10 + (maxNesting * 50);
    const memoryMb = 128; // Default Lambda memory

    return {
      functionName,
      complexity,
      estimatedDurationMs,
      memoryMb,
      costPerMillionInvocations: calculateLambdaCost(estimatedDurationMs, memoryMb),
      currency: 'USD'
    };
  }
}
