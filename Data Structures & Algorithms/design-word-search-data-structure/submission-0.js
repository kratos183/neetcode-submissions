class WordDictionary {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
    
    addWord(word) {
        let node = this;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new WordDictionary();
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    }
    
    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return node.isEnd;
            if (word[i] === '.') {
                for (let key in node.children) {
                    if (dfs(node.children[key], i + 1)) return true;
                }
                return false;
            }
            if (!node.children[word[i]]) return false;
            return dfs(node.children[word[i]], i + 1);
        };
        return dfs(this, 0);
    }
}