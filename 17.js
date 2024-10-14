var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now(); // Current time
    const expirationTime = now + duration; // Calculate expiration time

    // Check if the key exists and is unexpired
    const exists = this.cache.has(key) && this.cache.get(key).expiration > now;

    // Set the new value and expiration time
    this.cache.set(key, { value, expiration: expirationTime });

    return exists; // Return whether the key was previously unexpired
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now(); // Current time

    // Check if the key exists and is unexpired
    if (this.cache.has(key)) {
        const { value, expiration } = this.cache.get(key);
        if (expiration > now) {
            return value; // Return the value if unexpired
        } else {
            this.cache.delete(key); // Remove expired key
        }
    }

    return -1; // Return -1 if key is expired or doesn't exist
};


/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now(); // Current time
    let count = 0;

    // Count unexpired keys
    for (const [key, { expiration }] of this.cache) {
        if (expiration > now) {
            count++;
        } else {
            this.cache.delete(key); // Remove expired key
        }
    }

    return count; // Return the count of unexpired keys
};


const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
 

