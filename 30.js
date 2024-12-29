class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize the result with the given value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this; // Enable method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Example usage with console outputs:
try {
    const calc1 = new Calculator(10);
    console.log(calc1.add(5).subtract(3).getResult()); // 12

    const calc2 = new Calculator(2);
    console.log(calc2.multiply(5).power(3).getResult()); // 1000

    const calc3 = new Calculator(20);
    console.log(calc3.divide(4).getResult()); // 5

    const calc4 = new Calculator(20);
    console.log(calc4.divide(0).getResult()); // Should throw an error
} catch (error) {
    console.error(error.message);
}
