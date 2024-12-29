/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};


// Example 1
const arr1 = [1, 2, 3];
const fn1 = function plusone(n) { return n + 1; };
console.log(map(arr1, fn1)); // Output: [2, 3, 4]

// Example 2
const arr2 = [1, 2, 3];
const fn2 = function plusI(n, i) { return n + i; };
console.log(map(arr2, fn2)); // Output: [1, 3, 5]

// Example 3
const arr3 = [10, 20, 30];
const fn3 = function constant() { return 42; };
console.log(map(arr3, fn3)); // Output: [42, 42, 42]