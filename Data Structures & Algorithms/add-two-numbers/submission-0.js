class Solution {
    addTwoNumbers(l1, l2) {
        let d = new ListNode(0), c = d, carry = 0;
        while (l1 || l2 || carry) {
            let s = (l1?.val||0) + (l2?.val||0) + carry;
            carry = s / 10 | 0;
            c = c.next = new ListNode(s % 10);
            l1 = l1?.next;
            l2 = l2?.next;
        }
        return d.next;
    }
}