/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject("Time Limit Exceeded"), t)
        );
        
        // Use Promise.race to handle the race between fn and timeout
        return Promise.race([fn(...args), timeoutPromise]);
    };

    // return async function (...args) {
    //     return new Promise((resolve, reject) => {
    //         const tmout = setTimeout(() => {
    //             reject("Time Limit Exceeded");
    //         }, t)

    //         fn(...args).then(res => {
    //             clearTimeout(tmout)
    //             resolve(res);
    //         }).catch(err => {
    //             clearTimeout(tmout)
    //             reject(err);
    //         })
    //     })
    // }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
