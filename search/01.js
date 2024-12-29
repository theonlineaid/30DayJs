// Linear Search:---------------
// Best for: Unsorted arrays or when the array is small.
// Time Complexity: O(n)
// In the worst case, it needs to examine every element, making it slower as the array grows.
// Space Complexity: O(1) (constant space)
// Use Case: Linear search is simple to implement and works on unsorted data.
// Example: Searching for an element in an unsorted list or when there are only a few elements.


function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1
}


const arr = [5, 3, 8, 6, 2, 7];
// const target = 6;
const index = linearSearch(arr, 5);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log('Element not found');
}