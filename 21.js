/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};



const arr = [1, 2, 3, 4, 5];
const size = 1;
console.log(chunk(arr, size));
// Output: [[1], [2], [3], [4], [5]]


const arr2 = [1, 9, 6, 3, 2];
const size2 = 3;
console.log(chunk(arr2, size2));
// Output: [[1, 9, 6], [3, 2]]


const arr3 = [8, 5, 3, 2, 6];
const size3 = 4;
console.log(chunk(arr3, size3));
// Output: [[8, 5, 3, 2, 6]]


const arr4 = [];
const size4 = 1;
console.log(chunk(arr4, size4));
// Output: []
