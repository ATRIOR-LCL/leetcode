//
// @lc app=leetcode id=39 lang=javascript
//
// [39] 组合总和
//
// https://leetcode.cn/problems/combination-sum/
//
// Difficulty: Medium
// Tags: 数组, 回溯

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length, ans = [], path = [];

    const dfs = (i, c) => {
        if (i === n) {
            if (c === 0) ans.push([...path]);
            return ;
        }

        if (candidates[i] > c) return dfs(i + 1, c);

        dfs(i + 1, c);

        path.push(candidates[i]);
        dfs(i, c - candidates[i]);
        path.pop();
    }

    dfs(0, target);
    return ans;
};
// @lc code=end

