/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    } 
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
        } else {
            result[arr2[i].id] = arr2[i];
        }
    } 

    return Object.values(result);
};


// Example input
const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
];
const arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
];

// Merge the arrays
const joinedArray = join(arr1, arr2);

// Print the result
console.log(joinedArray);