const Solution = class {
    maxProfit(prices) {
        let minPrice = Infinity, maxProfit = 0;
        for (const price of prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
};