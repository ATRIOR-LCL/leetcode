//
// @lc app=leetcode id=104 lang=javascript
//
// [104] 二叉树的最大深度
//
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
//
// Difficulty: Easy
// Tags: 树, 深度优先搜索, 广度优先搜索, 二叉树

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let ans = 0;
    const dfs = (node, dep) => {
        if (!node) return ;
        ans = Math.max(ans, dep);
        dfs(node.left, dep + 1);
        dfs(node.right, dep + 1);
    }
    dfs(root, 1);
    return ans;
};
// @lc code=end

