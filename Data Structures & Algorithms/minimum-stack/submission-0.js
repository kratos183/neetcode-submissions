class MinStack {
    constructor() {
        this.stack = []; // Stores [value, currentMin]
    }
    
    push(val) {
        const min = this.stack.length ? Math.min(val, this.stack[this.stack.length - 1][1]) : val;
        this.stack.push([val, min]);
    }
    
    pop() {
        this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1][0];
    }
    
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}