class Solution {
    combinationSum(nums, target) {
        const res = [];
        const dfs = (i, path, sum) => {
            if (sum === target) return res.push([...path]);
            if (sum > target || i === nums.length) return;
            path.push(nums[i]);
            dfs(i, path, sum + nums[i]);
            path.pop()
            dfs(i + 1, path, sum);
        }
        dfs(0, [], 0);
        return res;
    }
}