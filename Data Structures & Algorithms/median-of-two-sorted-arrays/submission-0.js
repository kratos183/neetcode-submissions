class Solution {
    findMedianSortedArrays(a, b) {
        if (a.length > b.length) [a, b] = [b, a];
        let l = 0, r = a.length, m = a.length, n = b.length;
        while (l <= r) {
            const p1 = (l + r) >> 1, p2 = ((m + n + 1) >> 1) - p1;
            const l1 = p1 === 0 ? -Infinity : a[p1 - 1];
            const r1 = p1 === m ? Infinity : a[p1];
            const l2 = p2 === 0 ? -Infinity : b[p2 - 1];
            const r2 = p2 === n ? Infinity : b[p2];
            if (l1 <= r2 && l2 <= r1) {
                return (m + n) % 2 === 0 ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.max(l1, l2);
            }
            l1 > r2 ? r = p1 - 1 : l = p1 + 1;
        }
    }
}