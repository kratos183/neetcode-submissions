class PrefixTree {
    constructor() { this.c = {}; this.e = false; }
    insert(w) { let n=this; for(let ch of w) n=n.c[ch]??=new PrefixTree(); n.e=true; }
    search(w) { let n=this; for(let ch of w) if(!(n=n.c[ch])) return false; return n.e; }
    startsWith(p) { let n=this; for(let ch of p) if(!(n=n.c[ch])) return false; return true; }
}