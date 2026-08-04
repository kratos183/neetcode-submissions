const Solution = class {
    maxArea(heights) {
        let l = 0, r = heights.length - 1, max = 0;
        while (l < r) {
            const h = Math.min(heights[l], heights[r]);
            max = Math.max(max, h * (r - l));
            heights[l] < heights[r] ? l++ : r--;
        }
        return max;
    }
};