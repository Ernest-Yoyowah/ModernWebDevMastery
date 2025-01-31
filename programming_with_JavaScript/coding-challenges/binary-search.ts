/**
 *
 * so i have to create a function with 2 parameters(array, targetValue)
 * @param array - array of values to search from
 * @param targetValue - the value to search for
 * @returns index of the value we are looking for, else return -1
 *
 * i will need 3 points - the left, midPoint and right,
 * what else do i even need, lets go bro
 */

// Function to check if the array is sorted in ascending order
const isSorted = (array: number[]): boolean => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false; // Returns false if the array is not sorted
  }
  return true; // Returns true if the array is sorted
};

// Binary search function to find the index of a target value in a sorted array
const searchBinaryIndex = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;

  if (!array || array.length === 0) return -1; // Handles empty array or invalid input

  while (left <= right) {
    // Calculating the mid index of the array
    let midPoint = Math.floor((left + right) / 2);

    if (target === array[midPoint])
      return midPoint; // If target is found at mid, return the index
    else if (target > array[midPoint]) {
      left = midPoint + 1; // Move the left pointer to the right half of the array
    } else right = midPoint - 1; // Move the right pointer to the left half of the array
  }

  return -1; // Returns -1 if target value is not found
};

// Test case
let testCase: number[] = [1, 3, 5, 7, 9];

// Test the binary search function
console.log(searchBinaryIndex(testCase, 3)); // Output should be the index of 3 (which is 1)

// Test the isSorted function
console.log(isSorted(testCase)); // Output should be true since the array is sorted
