/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */


function cancellable(fn, args, t) {
    let startTime = Date.now();
    let results = [];

    function callFn() {
        let currentTime = Date.now() - startTime;
        let result = fn(...args);
        results.push({ time: currentTime, returned: result });
    }

    // Call the function immediately
    callFn();

    // Set up the interval for repeated calls
    let intervalId = setInterval(callFn, t);

    // Return the cancel function
    return function cancelFn() {
        clearInterval(intervalId);
    };
}

// Example 1
let cancelTimeMs = 190;
let cancelFn1 = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn1, cancelTimeMs);

// Example 2
cancelTimeMs = 165;
let cancelFn2 = cancellable((x1, x2) => x1 * x2, [2, 5], 30);
setTimeout(cancelFn2, cancelTimeMs);

// Example 3
cancelTimeMs = 180;
let cancelFn3 = cancellable((x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50);
setTimeout(cancelFn3, cancelTimeMs);
