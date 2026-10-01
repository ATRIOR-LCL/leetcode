//
// @lc app=leetcode id=94 lang=javascript
//
// [94] 二叉树的中序遍历
//
// https://leetcode.cn/problems/binary-tree-inorder-traversal/
//
// Difficulty: Easy
// Tags: 栈, 树, 深度优先搜索, 二叉树

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = [];
    const dfs = (node) => {
        if (!node) return ;
        dfs(node.left);
        ans.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return ans;
};
// @lc code=end

