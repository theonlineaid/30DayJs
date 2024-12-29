// Binary Search:------
// Best for: Sorted arrays.
// Time Complexity: O(log n)
// It is much faster than linear search for large arrays because it halves the search space at each step.
// Space Complexity: O(1) (constant space), though recursive implementations can use O(log n) space.
// Use Case: Binary search is the optimal choice when you have a sorted array and need fast lookups.
// Example: Searching for an element in a sorted list, like searching in a sorted list of numbers or strings.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the middle index

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
// const arr = [1, 3, 5, 7, 9, 11, 13, 15];
// const target = 7;
// const index = binarySearch(arr, target);

const unsortedArr = [10, 3, 5, 7, 9];
unsortedArr.sort((a, b) => a - b); // Sorting the array first

console.log(unsortedArr); 
const target = 3;
console.log(binarySearch(unsortedArr, target)); // Output: 3
const idx = binarySearch(unsortedArr, target); 

if (idx !== -1) {
    console.log(`Element found at index ${idx}`);
} else {
    console.log('Element not found');
}
