class Solution {
    lastStoneWeight(stones) {
        const heap = stones.sort((a, b) => b - a);
        while (heap.length > 1) {
            const y = heap.shift();
            const x = heap.shift();
            if (x !== y) {
                heap.push(y - x);
                heap.sort((a, b) => b - a);
            }
        }
        return heap[0] || 0;
    }
}