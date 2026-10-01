//
// @lc app=leetcode id=128 lang=javascript
//
// [128] 最长连续序列
//
// https://leetcode.cn/problems/longest-consecutive-sequence/
//
// Difficulty: Medium
// Tags: 并查集, 数组, 哈希表

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(), ans = 0;
    for (let v of nums) set.add(v);
    for (let v of set) {
        if (!set.has(v - 1)) {
            let cnt = 1, cur = v;
            while (set.has(cur + 1)) {
                cur ++;
                cnt ++;
            }
            ans = Math.max(ans, cnt);
        }
    }
    return ans;
};
// @lc code=end

