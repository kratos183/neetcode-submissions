class Solution {
    largestRectangleArea(h) {
        const st = [];
        let max = 0;
        for (let i = 0; i < h.length; i++) {
            let start = i;
            while (st.length && st[st.length - 1][1] > h[i]) {
                const [idx, height] = st.pop();
                max = Math.max(max, height * (i - idx));
                start = idx;
            }
            st.push([start, h[i]]);
        }
        for (const [idx, height] of st) max = Math.max(max, height * (h.length - idx));
        return max;
    }
}