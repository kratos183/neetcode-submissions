class Solution {
    goodNodes(root) {
        const dfs = (node, max) => {
            if (!node) return 0;
            let good = node.val >= max ? 1 : 0;
            let newMax = Math.max(max, node.val);
            return good + dfs(node.left, newMax) + dfs(node.right, newMax);
        };
        return dfs(root, -Infinity);
    }
}