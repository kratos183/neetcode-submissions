class Solution {
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a-b);
        const res = [];
        const dfs = (i, path, sum) => {
            if (sum === target) return res.push([...path]);
            if (sum > target || i === candidates.length) return;
            path.push(candidates[i]);
            dfs(i + 1, path, sum + candidates[i]);
            path.pop();
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
            dfs(i + 1, path, sum);
        };
        dfs(0, [], 0);
        return res;
    }
}