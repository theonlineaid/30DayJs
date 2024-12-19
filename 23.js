/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function(fn) {
    // Initialize an empty object to hold the grouped items
    const grouped = {};
    
    // Iterate over each item in the array
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        // Call the fn function to get the key
        const key = fn(item);
        
        // If the key does not exist in the object, create a new array for that key
        if (!grouped[key]) {
            grouped[key] = [];
        }
        
        // Push the item to the corresponding group
        grouped[key].push(item);
    }
    
    return grouped;
};


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn = function(n) { 
  return String(n > 5);
};

console.log(array.groupBy(fn));