//
// @lc app=leetcode id=53 lang=javascript
//
// [53] 最大子数组和
//
// https://leetcode.cn/problems/maximum-subarray/
//
// Difficulty: Medium
// Tags: 数组, 分治, 动态规划

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prefix = -Infinity, ans = -Infinity;
    for (let v of nums) {
        prefix = Math.max(v, prefix + v);
        ans = Math.max(ans, prefix);
    }
    return ans;
};
// @lc code=end

