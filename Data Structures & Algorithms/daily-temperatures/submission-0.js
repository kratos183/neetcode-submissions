class Solution {
    dailyTemperatures(t) {
        const res = new Array(t.length).fill(0);
        const st = [];
        for (let i = 0; i < t.length; i++) {
            while (st.length && t[st[st.length - 1]] < t[i]) {
                const j = st.pop();
                res[j] = i - j;
            }
            st.push(i);
        }
        return res;
    }
}