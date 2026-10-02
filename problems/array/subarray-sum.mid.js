//
// @lc app=leetcode id=560 lang=javascript
//
// [560] 和为 K 的子数组
//
// https://leetcode.cn/problems/subarray-sum-equals-k/
//
// Difficulty: Medium
// Tags: 数组, 哈希表, 前缀和

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefix = 0, mp = new Map(), ans = 0;
    mp.set(prefix, 1);
    for (let v of nums) {
        prefix += v;
        if (mp.has(prefix - k)) {
            ans += mp.get(prefix - k);
        }
        mp.set(prefix, (mp.get(prefix) || 0) + 1);
    }
    return ans;
};
// @lc code=end

