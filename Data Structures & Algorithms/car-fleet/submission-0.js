class Solution {
    carFleet(t, p, s) {
        const st = [];
        for (let [pos, spd] of p.map((pos, i) => [pos, s[i]]).sort((a, b) => b[0] - a[0])) {
            const time = (t - pos) / spd;
            if (!st.length || time > st[st.length - 1]) st.push(time);
        }
        return st.length;
    }
}