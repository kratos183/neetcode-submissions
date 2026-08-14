class Solution {
    rightSideView(root) {
        if (!root) return [];
        let r = [], q = [root];
        while (q.length) {
            let s = q.length;
            for (let i = 0; i < s; i++) {
                let n = q.shift();
                if (i === s - 1) r.push(n.val);
                if (n.left) q.push(n.left);
                if (n.right) q.push(n.right);
            }
        }
        return r;
    }
}