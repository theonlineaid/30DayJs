console.time()
let startTime = performance.now(); 

const fn = (arg) => {
    for (let i = 0; i < arg; i++) {
        console.log(i);  
    }
}

fn(1000);

let endTime = performance.now();
console.timeEnd();

let timeTaken = endTime - startTime;

// Convert milliseconds to seconds
let timeTakenSeconds = timeTaken / 1000;
console.log(`Time taken to execute : ${timeTaken} milliseconds`);
console.log(`Time taken to execute : ${timeTakenSeconds.toFixed(2)} seconds`);