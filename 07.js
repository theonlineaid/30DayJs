function reduce(nums, fn, init) {
    // Check if nums is a valid array
    if (!Array.isArray(nums)) {
        throw new TypeError("The first argument must be an array.");
    }

    // Check if fn is a function
    if (typeof fn !== "function") {
        throw new TypeError("The second argument must be a function.");
    }

    // Ensure init is provided
    if (init === undefined) {
        throw new Error("The third argument (initial value) is required.");
    }

    // Initialize result with the initial value
    let result = init;

    // Iterate over the array and apply the reducer function
    for (let i = 0, len = nums.length; i < len; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example 1
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) { return accum + curr * curr; };
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3
const nums3 = [];
const fn3 = function sum(accum, curr) { return 0; };
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25

// Example 4 - Invalid inputs
try {
    reduce(null, fn1, 0); // Throws TypeError
} catch (error) {
    console.error(error.message);
}

try {
    reduce(nums1, null, 0); // Throws TypeError
} catch (error) {
    console.error(error.message);
}

try {
    reduce(nums1, fn1); // Throws Error
} catch (error) {
    console.error(error.message);
}
