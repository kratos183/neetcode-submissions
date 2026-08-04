const Solution = class {
    topKFrequent(nums, k) {
        const freqMap = new Map();
        
        // 1. Count frequencies
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        
        // 2. Sort by frequency (descending) & take top k
        return [...freqMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => entry[0]);
    }
};