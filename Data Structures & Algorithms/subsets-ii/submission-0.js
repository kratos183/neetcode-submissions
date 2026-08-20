class Solution {
    subsetsWithDup = nums => {
        nums.sort((a,b) => a-b);
        const res = [];
        (function dfs(i, path) {
            if (i === nums.length) return res.push([...path]);
            path.push(nums[i]);
            dfs(i+1, path);
            path.pop();
            while (i+1 < nums.length && nums[i] === nums[i+1]) i++;
            dfs(i+1, path);
        })(0, []);
        return res;
    };
}