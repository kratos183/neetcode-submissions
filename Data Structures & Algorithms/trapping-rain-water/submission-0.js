const Solution = class {
    trap(heights) {
        let l = 0, r = heights.length - 1;
        let leftMax = 0, rightMax = 0, water = 0;
        
        while (l < r) {
            if (heights[l] < heights[r]) {
                heights[l] >= leftMax ? leftMax = heights[l] : water += leftMax - heights[l];
                l++;
            } else {
                heights[r] >= rightMax ? rightMax = heights[r] : water += rightMax - heights[r];
                r--;
            }
        }
        return water;
    }
};