/**
 * @param {number} n - The starting value
 * @return {Function} - The counter function
 */
var createCounter = function (n) {
    let currentValue = n;
    return function () {
        return currentValue++;
    };
};

// Example Usage:

// Example 1:
const counter1 = createCounter(10);
console.log(counter1()); // 10
console.log(counter1()); // 11
console.log(counter1()); // 12

// Example 2:
const counter2 = createCounter(-2);
console.log(counter2()); // -2
console.log(counter2()); // -1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2
