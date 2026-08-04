const Solution = class {
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n).fill(1);
        
        // 1. Prefix pass: output[i] = product of all elements BEFORE i
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }
        
        // 2. Suffix pass: multiply by product of all elements AFTER i
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }
        
        return output;
    }
};