//
// @lc app=leetcode id=543 lang=javascript
//
// [543] 二叉树的直径
//
// https://leetcode.cn/problems/diameter-of-binary-tree/
//
// Difficulty: Easy
// Tags: 树, 深度优先搜索, 二叉树, 树形 DP

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
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    const dfs = (node) => {
        if (!node) return 0;
        let leftLen = dfs(node.left);
        let rightLen = dfs(node.right);
        ans = Math.max(ans, leftLen + rightLen);
        return Math.max(leftLen, rightLen) + 1;
    }
    dfs(root);
    return ans;
};
// @lc code=end

