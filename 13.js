/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([result1, result2]) => result1 + result2);
};

// Example usage:
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
    .then(result => {
        console.log(result); // Output: 7
    });

// Another example usage
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise3, promise4)
    .then(result => {
        console.log(result); // Output: -2
    });


/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/