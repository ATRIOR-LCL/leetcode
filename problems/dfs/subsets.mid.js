//
// @lc app=leetcode id=78 lang=javascript
//
// [78] 子集
//
// https://leetcode.cn/problems/subsets/
//
// Difficulty: Medium
// Tags: 位运算, 数组, 回溯

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let path = [], n = nums.length, ans = [];
    const dfs = (i) => {
        if (i === n) {
            ans.push([...path]);
            return ;
        };
        dfs(i + 1);

        path.push(nums[i]);
        dfs(i + 1);
        path.pop();
    }
    dfs(0);
    return ans;
};
// @lc code=end

