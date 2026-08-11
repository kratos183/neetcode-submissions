class Solution {
    mergeKLists(lists) {
        let h = [];
        for (let l of lists) while(l) {h.push(l.val); l = l.next;}
        h.sort((a, b) => a-b);
        let d = new ListNode(0), c = d;
        for (let v of h) {c.next = new ListNode(v); c = c.next;}
        return d.next;
    }
}