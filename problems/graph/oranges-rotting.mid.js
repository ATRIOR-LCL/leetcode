//
// @lc app=leetcode id=994 lang=javascript
//
// [994] 腐烂的橘子
//
// https://leetcode.cn/problems/rotting-oranges/
//
// Difficulty: Medium
// Tags: 广度优先搜索, 数组, 矩阵

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length, n = grid[0].length, fresh = 0, ans = 0, queue = [];
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (grid[i][j] === 1) fresh ++;
            else if (grid[i][j] === 2) queue.push([i, j]);
        }
    }
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    while (fresh && queue.length) {
        let size = queue.length;
        while (size --) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of dirs) {
                let nx = x + dx, ny = y + dy;
                if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] === 1) {
                    fresh --;
                    grid[nx][ny] = 2;
                    queue.push([nx, ny]);
                }
            }
        }
        ans ++;
    }
    return fresh ? -1 : ans;
};
// @lc code=end

