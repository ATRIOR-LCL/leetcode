//
// @lc app=leetcode id=56 lang=javascript
//
// [56] 合并区间
//
// https://leetcode.cn/problems/merge-intervals/
//
// Difficulty: Medium
// Tags: 数组, 排序, 快速排序

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = [];
    intervals.sort((a, b) => a[0] - b[0]);
    ans.push(intervals[0]);
    for (let i = 1; i < intervals.length; i ++) {
        if (intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i])
        } else {
            ans[ans.length - 1][1] = Math.max(
                ans[ans.length - 1][1],
                intervals[i][1]
            )
        }
    }
    return ans;
};
// @lc code=end

