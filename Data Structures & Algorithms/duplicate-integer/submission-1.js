var Solution = class {
    // Change the name to hasDuplicate
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
};