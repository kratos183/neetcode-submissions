class Solution {
    invertTree(root) {
        if (!root) return null;
        let l = this.invertTree(root.left), r = this.invertTree(root.right);
        root.left = r; 
        root.right = l;
        return root;
    }
}