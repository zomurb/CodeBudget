export interface CostEstimate {
  functionName: string;
  complexity: string; // Big O notation
  estimatedDurationMs: number;
  memoryMb: number;
  costPerMillionInvocations: number;
  currency: string;
}

export interface AnalysisResult {
  fileName: string;
  estimates: CostEstimate[];
  totalComplexityScore: number;
}
