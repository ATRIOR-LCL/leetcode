//
// @lc app=leetcode id=1 lang=javascript
//
// [1] 两数之和
//
// https://leetcode.cn/problems/two-sum/
//
// Difficulty: Easy
// Tags: 数组, 哈希表

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i ++) {
        if (mp.has(target - nums[i])) {
            return [i, mp.get(target - nums[i])];
        }
        mp.set(nums[i], i);
    }
    return [];
};
// @lc code=end

