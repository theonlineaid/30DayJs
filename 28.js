// class EventEmitter {
//     constructor() {
//         this.events = {}; 
//     }

//     // Subscribe to an event
//     subscribe(eventName, callback) {
//         if (!this.events[eventName]) {
//             this.events[eventName] = []; 
//         }

//         const index = this.events[eventName].length; 
//         this.events[eventName].push(callback);

//         return {
//             unsubscribe: () => {
//                 if (this.events[eventName]) {
//                     this.events[eventName].splice(index, 1); 
//                 }
//             },
//         };
//     }

//     // Emit an event
//     emit(eventName, args = []) {
//         if (!this.events[eventName]) {
//             return []; // Return empty array if no listeners exist
//         }

//         // Call each callback with the provided arguments and return results
//         return this.events[eventName].map((callback) => callback(...args));
//     }
// }

class EventEmitter {
    constructor() {
        this.subscriptions = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const id = Symbol(callback);
        this.subscriptions.set(eventName, this.subscriptions.has(eventName)
            ? [...this.subscriptions.get(eventName), { id, callback }]
            : [{ id, callback }]
        );

        return {
            unsubscribe: () => this.subscriptions.set(eventName, this.subscriptions.get(eventName).filter(({ id: subId }) => subId !== id))
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return (this.subscriptions.get(eventName) || []).map(({ callback }) => callback(...args));
    }
}

// Example usage:
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);

console.log(emitter.emit("firstEvent", [5])); // [6, 7]
sub1.unsubscribe();
console.log(emitter.emit("firstEvent", [5])); // [7]
