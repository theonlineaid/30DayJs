
/**
* @param {string} val - The string value to be tested
* @return {Object} - An object with `toBe` and `notToBe` methods
*/
function expect(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: (val2) => {
            if (val === val2) {
                throw new Error("Equal");
            }
            else {
                return true;
            }
        }
    }
}


// Example 1:
try {
    console.log(expect(5).toBe(5)); // { value: true }
} catch (e) {
    console.log({ error: e.message }); // Not expected to be called here
}

// Example 2:
try {
    console.log(expect(5).toBe(null)); // Error: "Not Equal"
} catch (e) {
    console.log({ error: e.message }); // { error: "Not Equal" }
}

// Example 3:
try {
    console.log(expect(5).notToBe(null)); // { value: true }
} catch (e) {
    console.log({ error: e.message }); // Not expected to be called here
}
