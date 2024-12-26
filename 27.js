/**
 * @param {Object|Array} obj - The input object or array
 * @return {Object|Array} - The compacted object or array
 */


function compactObject(obj) {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    // This for loop deals with when obj is an iterable object
    // Steps 4-5 as described above
    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) compacted[key] = value;
    }

    return compacted;
}

// Example Usage
console.log(compactObject([null, 0, false, 1]));
// Output: [1]

console.log(compactObject({ a: null, b: [false, 1] }));
// Output: { b: [1] }

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]