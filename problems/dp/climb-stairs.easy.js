//
// @lc app=leetcode id=70 lang=javascript
//
// [70] 爬楼梯
//
// https://leetcode.cn/problems/climbing-stairs/
//
// Difficulty: Easy
// Tags: 记忆化, 数学, 动态规划

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = new Array(n + 1).fill(-1);
    const dfs = (i) => {
        if (i <= 0) return i === 0 ? 1 : 0;
        if (cache[i] !== -1) return cache[i];
        let res = dfs(i - 1) + dfs(i - 2);
        cache[i] = res;
        return res;
    }
    return dfs(n);
};
// @lc code=end

