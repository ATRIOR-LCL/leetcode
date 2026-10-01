//
// @lc app=leetcode id=11 lang=javascript
//
// [11] 盛最多水的容器
//
// https://leetcode.cn/problems/container-with-most-water/
//
// Difficulty: Medium
// Tags: 贪心, 数组, 双指针

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, ans = 0;
    while (l < r) {
        ans = Math.max(
            ans, 
            Math.min(height[l], height[r]) * (r - l)
        );
        if (height[l] < height[r]) l ++;
        else r --;
    }
    return ans;
};
// @lc code=end

