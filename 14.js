/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(millis); // Resolving the promise with the value of millis
        }, millis);
    });
}

// Example usage:
let t = Date.now();
sleep(100).then((resolvedValue) => {
    console.log(`Resolved after: ${Date.now() - t} ms, Value: ${resolvedValue}`); // Should print approximately 100 ms
});