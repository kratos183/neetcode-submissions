class Solution {
    cloneGraph(node) {
        if (!node) return null;
        const map = new Map();
        const dfs = (n) => {
            if (map.has(n)) return map.get(n);
            const copy =  new Node(n.val);
            map.set(n, copy);
            for (let neighbor of n.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }
            return copy;
        };
        return dfs(node);
    }
}