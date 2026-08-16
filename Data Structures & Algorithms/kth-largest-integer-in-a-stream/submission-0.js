class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        for (let n of nums) this.add(n);
    }
    
    add(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
        if (this.heap.length > this.k) this.heap.shift();
        return this.heap[0];
    }
}