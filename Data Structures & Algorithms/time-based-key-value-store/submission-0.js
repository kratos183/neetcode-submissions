class TimeMap {
    constructor() { this.map = {}; }
    set (k, v, t) {
        (this.map[k] || (this.map[k] = [])).push([t, v]);
    }
    get(k, t) {
        const a = this.map[k] || [];
        let l = 0, r = a.length - 1, res = "";
        while (l <= r) {
            const m = (l + r) >> 1;
            if (a[m][0] <= t) { res = a[m][1]; l = m + 1; }
            else r = m - 1;
        }
        return res;
    }
}