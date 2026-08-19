class Solution {
    permute(nums) {
        const res = [];
        const dfs = i => {
            if (i === nums.length) return res.push([...nums]);
            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                dfs(i + 1);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        };
        dfs(0);
        return res;
    }
}