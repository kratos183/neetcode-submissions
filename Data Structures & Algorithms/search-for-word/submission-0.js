class Solution {
    exist(board, word) {
        const rows = board.length, cols = board[0].length;
        const dfs = (i, j, idx) => {
            if (idx === word.length) return true;
            if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[idx]) return false;
            const temp = board[i][j];
            board[i][j] = '#';
            const found = dfs(i+1, j, idx+1) || dfs(i-1, j, idx+1) || dfs(i, j+1, idx+1) || dfs(i, j-1, idx+1);
            board[i][j] = temp;
            return found;
        };
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (dfs(i, j, 0)) return true;
            }
        }
        return false;
    }
}