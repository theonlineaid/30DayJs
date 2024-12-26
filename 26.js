/**
 * @param {Array} arr - The multi-dimensional array to flatten
 * @param {number} n - The maximum depth for flattening
 * @return {Array} - The flattened array up to depth n
 */
const flatten = function (arr, n) {
    const result = [];

    const helper = (array, currentDepth) => {
        for (const element of array) {
            if (Array.isArray(element) && currentDepth < n) {
                // Recurse into subarray
                helper(element, currentDepth + 1);
            } else {
                // Add the element as is
                result.push(element);
            }
        }
    };

    helper(arr, 0); // Start recursion with depth 0
    return result;
};


// Example Usage
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const depth1 = 0;
// console.log(flatten(arr1, depth1)); 

// const depth2 = 1;
// console.log(flatten(arr1, depth2)); 

const depth3 = 2;
console.log(flatten(arr1, depth3)); 
