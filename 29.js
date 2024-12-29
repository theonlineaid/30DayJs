/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums; // Store the array of integers
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((sum, num) => sum + num, 0); // Return the sum of the array
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(",")}]`; // Return the array as a comma-separated string in brackets
};

// Example usage:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
obj1 + obj2; // 10
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"

console.log(obj1 + obj2);

