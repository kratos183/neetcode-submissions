class Solution {
    maxPathSum(root) {
        let max = -Infinity;
        const dfs = node => {
            if (!node) return 0;
            let l = Math.max(0, dfs(node.left));
            let r = Math.max(0, dfs(node.right));
            max = Math.max(max, node.val + l + r);
            return node.val + Math.max(l, r);
        };
        dfs(root);
        return max;
    }
}