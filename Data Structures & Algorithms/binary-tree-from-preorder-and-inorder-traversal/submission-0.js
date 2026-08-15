class Solution {
    buildTree(preorder, inorder) {
        const dfs = (l, r) => {
            if (l > r) return null;
            let val = preorder.shift();
            let idx = inorder.indexOf(val);
            let root = new TreeNode(val);
            root.left = dfs(l, idx - 1);
            root.right = dfs(idx + 1, r);
            return root;
        };
        return dfs(0, inorder.length - 1);
    }
}