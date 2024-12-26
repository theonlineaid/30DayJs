/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // return arr.sort((a, b) => fn(a) - fn(b)); // for number
    return arr.sort((a, b) => fn(a).localeCompare(fn(b))); // for string
};


const arr = ["apple", "benna", "abc", "zcatagory", "coca-cola", "sprite"];
const fn = (x) => x;
console.log(sortBy(arr, fn));
// Output: [1, 2, 3, 4, 5]
