//
// @lc app=leetcode id=101 lang=javascript
//
// [101] 对称二叉树
//
// https://leetcode.cn/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSame = (p, q) => {
        if (!p || !q) return p === q;
        return p.val === q.val && isSame(p.left, q.right) && isSame(p.right, q.left);
    }
    return isSame(root.left, root.right);
};
// @lc code=end

