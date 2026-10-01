//
// @lc app=leetcode id=35 lang=javascript
//
// [35] 搜索插入位置
//
// https://leetcode.cn/problems/search-insert-position/
//
// Difficulty: Easy
// Tags: 数组, 二分查找

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return l;
};
// @lc code=end

