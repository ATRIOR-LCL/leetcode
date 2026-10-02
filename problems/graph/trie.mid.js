//
// @lc app=leetcode id=208 lang=javascript
//
// [208] 实现 Trie (前缀树)
//
// https://leetcode.cn/problems/implement-trie-prefix-tree/
//
// Difficulty: Medium
// Tags: 设计, 字典树, 哈希表, 字符串

// @lc code=start

var Trie = function() {
    this.child = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.child;
    for (const ch of word) {
        if (!node[ch]) node[ch] = {};
        node = node[ch];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchPrefix(word);
    return node && node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return Boolean(this.searchPrefix(prefix))
};

Trie.prototype.searchPrefix = function(prefix) {
    let node = this.child;
    for (const ch of prefix) {
        if (!node[ch]) return false;
        node = node[ch];
    }
    return node;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

