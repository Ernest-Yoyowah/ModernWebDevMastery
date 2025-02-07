/**
 * Generates the Fibonacci sequence up to the specified length.
 *
 * @param sequenceLength - The number of terms to generate in the Fibonacci sequence.
 * @returns An array containing the Fibonacci sequence.
 */
const generateFibonacciSequence = (sequenceLength: number): number[] => {
  if (sequenceLength <= 0) {
    return []; // Return an empty array for non-positive input
  }
  if (sequenceLength === 1) {
    return [0]; // Base case: Fibonacci sequence with one term
  }

  const fib: number[] = [0, 1]; // Initialize the first two terms of the sequence

  // Generate the sequence starting from the 3rd term
  for (let i = 2; i < sequenceLength; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // return fib; // reverse
  return fib.reverse();
};

// Example usage
console.log(generateFibonacciSequence(8));
