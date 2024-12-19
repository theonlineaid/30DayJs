/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    // Check if the array is empty, if so return -1
    if (this.length === 0) {
        return -1;
    }
    // Otherwise, return the last element
    return this[this.length - 1];
};

const nums = [null, {}, 3];
console.log(nums.last()); // Output: 3


const nums1 = [];
console.log(nums1.last()); // Output: -1
