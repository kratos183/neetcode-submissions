class Solution {
    isValid(s) {
        const st = [], m = {')':'(', '}':'{', ']':'['};
        for (let c of s) {
            if (c in m) {
                if (st.pop() !==m[c])return false;
            } else st.push(c);
        }
        return !st.length;
    }
}