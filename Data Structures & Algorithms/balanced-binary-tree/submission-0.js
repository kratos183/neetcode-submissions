class Solution {
    isBalanced(root) {
        const dfs = node => {
            if (!node) return 0;
            let l = dfs(node.left);
            let r = dfs(node.right);
            if (l === -1 || r === -1 || Math.abs(l - r) > 1) return -1;
            return 1 + Math.max(l, r);
        };
        return dfs(root) !== -1;
    }
}