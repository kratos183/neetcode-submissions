class Solution {
    generateParenthesis(n) {
        const res = [];
        const dfs = (open, close, path) => {
            if (path.length === n * 2) return res.push(path);
            if (open < n) dfs(open + 1, close, path + '(');
            if (close < open) dfs(open, close + 1, path + ')');
        };
        dfs(0, 0, '');
        return res;
    }
}