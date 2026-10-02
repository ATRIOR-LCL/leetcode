//
// @lc app=leetcode id=46 lang=javascript
//
// [46] 全排列
//
// https://leetcode.cn/problems/permutations/
//
// Difficulty: Medium
// Tags: 数组, 回溯

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length, path = [], flag = new Array(n).fill(false), ans = [];
    const dfs = (i) => {
        if (i === n) ans.push([...path]);
        for (let j = 0; j < n; j ++) {
            if (!flag[j]) {
                flag[j] = true;
                path.push(nums[j]);
                dfs(i + 1);
                path.pop();
                flag[j] = false;
            }
        }
    }
    dfs(0);
    return ans;
};
// @lc code=end

