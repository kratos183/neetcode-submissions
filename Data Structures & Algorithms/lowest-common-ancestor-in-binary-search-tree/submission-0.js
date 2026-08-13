class Solution {
    lowestCommonAncestor = (root, p, q) => 
        p.val < root.val && q.val < root.val ? this.lowestCommonAncestor(root.left, p, q) :
        p.val > root.val && q.val > root.val ? this.lowestCommonAncestor(root.right, p, q) :
        root;
}