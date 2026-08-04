class Solution {
    search(n, t) {
        let l = 0, r = n.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (n[m] === t) return m;
            n[m] < t ? l = m + 1 : r = m - 1;
        }
        return -1; 
    }
}