class Solution {
    copyRandomList(head) {
        if (!head) return null;
        let c = head;
        while (c) {let n = new Node(c.val, c.next, null); c.next = n; c = n.next;}
        c = head;
        while (c) {c.next.random = c.random ? c.random.next : null; c = c.next.next;}
        let d = new Node(0), r = d;
        c = head;
        while (c) {r.next = c.next; c.next = c.next.next; c = c.next; r = r.next;}
        return d.next;
    }
}