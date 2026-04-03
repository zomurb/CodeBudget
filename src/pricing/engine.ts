export const PRICING = {
  AWS: {
    Lambda: {
      pricePerGbSecond: 0.0000166667,
      pricePerMillionRequests: 0.20,
      freeTierRequests: 1000000,
    }
  },
  GCP: {
    CloudFunctions: {
      pricePerGbSecond: 0.0000165,
      pricePerMillionInvocations: 0.40,
    }
  }
};

export function calculateLambdaCost(durationMs: number, memoryMb: number): number {
  const durationSeconds = durationMs / 1000;
  const memoryGb = memoryMb / 1024;
  const gbSeconds = durationSeconds * memoryGb;
  
  const executionCost = gbSeconds * PRICING.AWS.Lambda.pricePerGbSecond;
  const invocationCost = PRICING.AWS.Lambda.pricePerMillionRequests / 1000000;
  
  return (executionCost + invocationCost) * 1000000; // Return cost per 1M requests
}
