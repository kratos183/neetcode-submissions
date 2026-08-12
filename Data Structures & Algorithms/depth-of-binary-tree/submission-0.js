class Solution {
    maxDepth(root) {
        if (!root) return 0;
        let q = [root], d = 0;
        while (q.length) {
            for (let i = q.length; i > 0; i--) {
                let n = q.shift();
                if (n.left) q.push(n.left);
                if (n.right) q.push(n.right);
            }
            d++;
        }
        return d;
    }
}