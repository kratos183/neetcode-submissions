class Solution {
    encode(strs) {
        return strs.map(s => s.length + '#' + s).join('');
    }

    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            const j = str.indexOf('#', i);
            const len = +str.slice(i, j);
            res.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}