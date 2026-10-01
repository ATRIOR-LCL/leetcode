//
// @lc app=leetcode id=15 lang=javascript
//
// [15] 三数之和
//
// https://leetcode.cn/problems/3sum/
//
// Difficulty: Medium
// Tags: 数组, 双指针, 排序

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length, ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i ++) {
    let x = nums[i], j = i + 1, k = n - 1;
    if (i && nums[i] === nums[i - 1]) continue;
    if (x + nums[i + 1] + nums[i + 2] > 0) break;
    if (x + nums[n - 1] + nums[n - 2] < 0) continue;
    while (j < k) {
      let s = x + nums[j] + nums[k];
      if (s > 0) k --;
      else if (s < 0) j ++;
      else {
        ans.push([x, nums[j], nums[k]]);
        j ++;
        while (j < k && nums[j] === nums[j - 1]) j ++;
        k --;
        while (k > j && nums[k] === nums[k + 1]) k --;
      }
    }
  }
  return ans;
};
// @lc code=end

