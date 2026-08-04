class Solution {
    search(n, t) {
        let l = 0, r = n.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (n[m] === t) return m;
            if (n[l] <= n[m]) {
                if (n[l] <= t && t < n[m]) r = m - 1;
                else l = m + 1;
            } else {
                if (n[m] < t && t <= n[r]) l = m + 1;
                else r = m - 1;
            }
        }
        return -1;
    }
}