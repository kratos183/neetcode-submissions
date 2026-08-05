class Solution {
    hasCycle(h) {
        let s = h, f = h;
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
            if (s === f) return true;
        }
        return false;
    }
}