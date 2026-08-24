class Solution {
    maxAreaOfIsland = g => {
        let m = 0;
        const dfs = (i, j) => 
            i < 0 || i >= g.length || j < 0 || j >= g[0].length || !g[i][j] ? 0 :
            (g[i][j] = 0, 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1));
        for (let i = 0; i < g.length; i++)
            for (let j = 0; j < g[0].length; j++)
                if (g[i][j]) m = Math.max(m, dfs(i, j));
        return m;
    };
}