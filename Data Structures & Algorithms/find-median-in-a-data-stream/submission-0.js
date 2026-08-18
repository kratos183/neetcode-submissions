class MedianFinder {
    constructor() {
        this.arr = [];
    }
    
    addNum(num) {
        let l = 0, r = this.arr.length;
        while (l < r) {
            let mid = (l + r) >> 1;
            if (this.arr[mid] < num) l = mid + 1;
            else r = mid;
        }
        this.arr.splice(l, 0, num);
    }
    
    findMedian() {
        const mid = Math.floor(this.arr.length / 2);
        if (this.arr.length % 2) return this.arr[mid];
        return (this.arr[mid - 1] + this.arr[mid]) / 2;
    }
}