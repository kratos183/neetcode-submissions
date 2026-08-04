class Solution {
    minEatingSpeed(p, h) {
        let l = 1, r = Math.max(...p);
        const can = k => p.reduce((s, x) => s + Math.ceil(x / k), 0) <= h;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            can(m) ? r = m : l = m + 1;
        }
        return l;
    }
}