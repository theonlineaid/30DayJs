/**
 * @param {number} init - The initial value for the counter.
 * @return {Object} - An object with three methods: increment, decrement, and reset.
 */

function createCounter(init) {
    let current = init; // Initialize the counter with the given `init` value

    return {
        // Increment the counter by 1 and return the updated value
        increment: function () {
            current += 1;
            return current;
        },

        // Decrement the counter by 1 and return the updated value
        decrement: function () {
            current -= 1;
            return current;
        },

        // Reset the counter back to the initial `init` value and return it
        reset: function () {
            current = init;
            return current;
        }
    };
}


const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset());    // 5
console.log(counter1.decrement()); // 4

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());    // 0
console.log(counter2.reset());    // 0
