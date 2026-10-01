//
// @lc app=leetcode id=226 lang=javascript
//
// [226] 翻转二叉树
//
// https://leetcode.cn/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let left = root.left, right = root.right;
    root.left = right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
// @lc code=end

