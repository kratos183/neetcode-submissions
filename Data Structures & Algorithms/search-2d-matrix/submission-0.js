class Solution {
    searchMatrix(matrix, target) {
        const m = matrix.length, n = matrix[0].length;
        let l = 0, r = m * n - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = matrix[Math.floor(mid / n)][mid % n];
            if (val === target) return true;
            val < target ? l = mid + 1 : r = mid - 1;
        }
        return false;
    }
}