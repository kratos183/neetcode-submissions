class LRUCache { 
    constructor(c) {this.c = c; this.m = new Map();}
    get(k) {
        if (!this.m.has(k)) return -1;
        let v = this.m.get(k);
        this.m.delete(k);
        this.m.set(k, v);
        return v;
    }
    put(k, v) {
        if (this.m.has(k)) this.m.delete(k);
        this.m.set(k, v);
        if (this.m.size > this.c) this.m.delete(this.m.keys().next().value);
    }
}