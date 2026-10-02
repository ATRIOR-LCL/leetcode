//
// @lc app=leetcode id=200 lang=javascript
//
// [200] 岛屿数量
//
// https://leetcode.cn/problems/number-of-islands/
//
// Difficulty: Medium
// Tags: 深度优先搜索, 广度优先搜索, 并查集, 数组, 矩阵

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length, ans = 0;
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return ;
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    for (let i = 0; i < m; i ++) {
        for (j = 0; j < n; j ++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                ans ++;
            }
        }
    }
    return ans;
};
// @lc code=end

