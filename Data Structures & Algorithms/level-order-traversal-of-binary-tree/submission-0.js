class Solution {
    levelOrder(root) {
        if (!root) return [];
        let r = [], q = [root];
        while (q.length) {
            let l = [], s = q.length;
            for (let i = 0; i < s; i++) {
                let n = q.shift();
                l.push(n.val);
                if (n.left) q.push(n.left);
                if (n.right) q.push(n.right);
            }
            r.push(l);
        }
        return r;
    }
}