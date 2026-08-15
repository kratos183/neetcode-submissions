class Solution {
    kthSmallest(root, k) {
        let r = null;
        const dfs = n => n && r === null && (dfs(n.left), --k || (r = n.val), dfs(n.right));
        dfs(root);
        return r;
    }
}