class Solution {
    leastInterval = (tasks, n) => {
        let f = Array(26).fill(0), m = 0;
        tasks.map(t => f[t.charCodeAt(0)-65]++);
        f.sort((a,b) => b-a);
        let idle = (f[0]-1) * n;
        for (let i=1; i<26 && idle>0; i++) idle -= Math.min(f[i], f[0]-1);
        return tasks.length + Math.max(0, idle);
    };
}