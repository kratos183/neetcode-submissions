class Solution {
    reverseList(h) {
        let p = null, c = h;
        while (c) {
            const n = c.next;
            c.next = p;
            p = c;
            c = n;
        }
        return p;
    }
}