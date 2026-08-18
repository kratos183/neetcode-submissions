class Solution {
    subsets(nums) {
        const result = [];
        const dfs = (start, path) => {
            result.push([...path]);
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                dfs(i + 1, path);
                path.pop();
            }
        };
        dfs(0, []);
        return result;
    }
}