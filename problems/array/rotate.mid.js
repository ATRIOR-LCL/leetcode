//
// @lc app=leetcode id=189 lang=javascript
//
// [189] 轮转数组
//
// https://leetcode.cn/problems/rotate-array/
//
// Difficulty: Medium
// Tags: 数组, 数学, 双指针

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = (nums, start, end) => {
        while (start < end) {
            let tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start ++;
            end --;
        }
    }

    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
// @lc code=end

