class Solution {
    removeNthFromEnd(head, n) {
        let d = new ListNode(0, head), f = d, s = d;
        for (let i = 0; i <= n; i++) f = f.next; 
        while (f) f = f.next, s = s.next;
        return s.next = s.next.next, d.next;
    }
}