class Solution {
    partition(s) {
        const res = [];
        const isPal = (l, r) => {
            while (l < r) if (s[l++] !== s[r--]) return false;
            return true;
        };
        const dfs = (start, path) => {
            if (start === s.length) return res.push([...path]);
            for (let end = start; end < s.length; end++) {
                if (isPal(start, end)) {
                    path.push(s.slice(start, end + 1));
                    dfs(end + 1, path);
                    path.pop();
                }
            }
        };
        dfs(0, []);
        return res;
    }
}