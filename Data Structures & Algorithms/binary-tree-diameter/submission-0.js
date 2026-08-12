class Solution {
    diameterOfBinaryTree(root) {
        let max = 0;
        const dfs = node => {
            if (!node) return 0;
            let l = dfs(node.left);
            let r = dfs(node.right);
            max = Math.max(max, l +r);
            return 1 + Math.max(l, r);
        };
        dfs(root);
        return max;
    }
}