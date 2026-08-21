class Solution {
    letterCombinations(digits) {
        if (!digits) return [];
        const map = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
        const res = [];
        const dfs = (i, s) => {
            if (i === digits.length) return res.push(s);
            for (let c of map[digits[i]]) dfs(i + 1, s + c);
        };
        dfs(0, '');
        return res;
    }
}