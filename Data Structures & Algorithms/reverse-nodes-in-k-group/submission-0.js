class Solution {
    reverseKGroup(head, k) {
        let c = head, n = 0;
        while (c && n < k) {c = c.next; n++;}
        if (n < k) return head;
        let p = null, t = null, c2 = head;
        for (let i = 0; i < k; i++) {t = c2.next; c2.next = p; p = c2; c2 = t;}
        head.next = this.reverseKGroup(c, k);
        return p;
    }
}