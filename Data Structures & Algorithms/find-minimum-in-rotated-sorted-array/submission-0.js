class Solution {
    findMin(n) {
        let l = 0, r = n.length - 1;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (n[m]> n[r]) l = m + 1;
            else r = m;
        }
        return n[l];
    }
}