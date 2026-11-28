class Solution {
    topKFrequent(nums, k) {
        const count = {}, bucket = [];
        for (const n of nums) count[n] = (count[n] || 0) + 1;
        for (const n in count) (bucket[count[n]] = bucket[count[n]] || []).push(+n);
        return bucket.flat().reverse().slice(0, k);
    }
}