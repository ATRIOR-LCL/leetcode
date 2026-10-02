//
// @lc app=leetcode id=79 lang=javascript
//
// [79] 单词搜索
//
// https://leetcode.cn/problems/word-search/
//
// Difficulty: Medium
// Tags: 深度优先搜索, 数组, 字符串, 回溯, 矩阵

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length, n = board[0].length;
    const dfs = (i, j, k) => {
        if (k === word.length) return true;
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[k]) return false;
        let tmp = board[i][j];
        board[i][j] = '#';
        let found = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        board[i][j] = tmp;
        return found;
    }
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
// @lc code=end

