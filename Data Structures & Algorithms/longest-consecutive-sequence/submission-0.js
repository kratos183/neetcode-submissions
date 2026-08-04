const Solution = class {
    longestConsecutive(nums) {
        const s = new Set(nums);
        let max = 0;
        for (const n of s) {
            if (!s.has(n - 1)) {
                let len = 1, c = n;
                while (s.has(++c)) len++;
                max = Math.max(max, len);
            }
        }
        return max;
    }
}