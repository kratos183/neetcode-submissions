const Solution = class {
    isValidSudoku(board) {
        const s = new Set();
        for (let i = 0; i < 81; i++) {
            const r = Math.floor(i / 9), c = i % 9, n = board[r][c];
            if (n === '.') continue;
            const b = `${Math.floor(r/3)}${Math.floor(c/3)}`;
            if (s.has(`R${r}${n}`) || s.has(`C${c}${n}`) || s.has(`B${b}${n}`)) return false;
            s.add(`R${r}${n}`).add(`C${c}${n}`).add(`B${b}${n}`);
        }
        return true;
    }
};