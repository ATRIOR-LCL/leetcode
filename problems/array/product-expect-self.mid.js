//
// @lc app=leetcode id=238 lang=javascript
//
// [238] 除了自身以外数组的乘积
//
// https://leetcode.cn/problems/product-of-array-except-self/
//
// Difficulty: Medium
// Tags: 数组, 前缀和

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length, L = new Array(n).fill(1), R = new Array(n).fill(1), ans = [];
    for (let i = 1; i < n; i ++) L[i] = L[i - 1] * nums[i - 1];
    for (let i = n - 2; i >= 0; i --) R[i] = R[i + 1] * nums[i + 1];
    for (let i = 0; i < n; i ++) {
        ans.push(L[i] * R[i]);
    }
    return ans;
};
// @lc code=end

