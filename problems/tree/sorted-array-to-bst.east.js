//
// @lc app=leetcode id=108 lang=javascript
//
// [108] 将有序数组转换为二叉搜索树
//
// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
//
// Difficulty: Easy
// Tags: 树, 二叉搜索树, 数组, 分治, 二叉树

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const dfs = (l, r) => {
        if (l > r) return null;
        let mid = Math.floor((l + r) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = dfs(l, mid - 1);
        root.right = dfs(mid + 1, r);
        return root;
    };
    return dfs(0, nums.length - 1);
};
// @lc code=end

