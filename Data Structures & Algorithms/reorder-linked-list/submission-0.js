class Solution {
    reorderList(head) {
        if (!head || !head.next) return;
        let s=head, f=head;
        while(f.next && f.next.next) {s=s.next; f=f.next.next;}
        let p=null, c=s.next;
        s.next=null;
        while(c) {let n=c.next; c.next=p; p=c; c=n;}
        let h=head;
        while(p) {let n1=h.next, n2=p.next; h.next=p; p.next=n1; h=n1; p=n2;}
    }
}