class Codec {
    serialize(root) {
        if (!root) return 'null';
        return root.val + ',' + this.serialize(root.left) + ',' + this.serialize(root.right);
    }
    
    deserialize(data) {
        const arr = data.split(',');
        let idx = 0;
        const dfs = () => {
            if (idx >= arr.length) return null;
            const val = arr[idx++];
            if (val === 'null') return null;
            const n = new TreeNode(+val);
            n.left = dfs();
            n.right = dfs();
            return n;
        };
        return dfs();
    }
}