class Twitter {
    constructor() {
        this.t = [];
        this.f = new Map();
        this.ut = new Map();
    }
    
    postTweet(u, id) {
        this.t.push([u, id]);
        this.ut.set(u, [...this.ut.get(u) || [], id]);
    }
    
    getNewsFeed(u) {
        const f = this.f.get(u) || new Set();
        const feed = [];
        for (let i = this.t.length - 1; i >= 0 && feed.length < 10; i--) {
            const [user, id] = this.t[i];
            if (user === u || f.has(user)) feed.push(id);
        }
        return feed;
    }
    
    follow(followerId, followeeId) {
        this.f.set(followerId, (this.f.get(followerId) || new Set()).add(followeeId));
    }
    
    unfollow(followerId, followeeId) {
        this.f.get(followerId)?.delete(followeeId);
    }
}