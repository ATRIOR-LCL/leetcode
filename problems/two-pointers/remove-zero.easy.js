//
// @lc app=leetcode id=283 lang=javascript
//
// [283] 移动零
//
// https://leetcode.cn/problems/move-zeroes/
//
// Difficulty: Easy
// Tags: 数组, 双指针

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let size = 0;
    for (let v of nums) {
        if (v) nums[size ++] = v;
    }
    nums.fill(0, size);
};
// @lc code=end

