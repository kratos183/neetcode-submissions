class Solution {
    isSubtree(root, subRoot) {
        const same = (p, q) => !p && !q || (p && q && p.val === q.val && same(p.left, q.left) && same(p.right, q.right));
        const dfs = n => n && (same(n, subRoot) || dfs(n.left) || dfs(n.right));
        return !!dfs(root);
    }
}