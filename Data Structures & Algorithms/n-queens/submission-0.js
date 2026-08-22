class Solution {
    solveNQueens(n) {
        const res = [], board = Array.from({length:n}, () => Array(n).fill('.'));
        const cols = new Set(), d1 = new Set(), d2 = new Set();
        const dfs = row => {
            if (row === n) return res.push(board.map(r => r.join('')));
            for (let c = 0; c < n; c++) {
                if (cols.has(c) || d1.has(row-c) || d2.has(row+c)) continue;
                board[row][c] = 'Q';
                cols.add(c); d1.add(row-c); d2.add(row+c);
                dfs(row + 1);
                board[row][c] = '.';
                cols.delete(c); d1.delete(row-c); d2.delete(row+c);
            }
        };
        dfs(0);
        return res;
    }
}