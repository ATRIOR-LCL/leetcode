//
// @lc app=leetcode id=207 lang=javascript
//
// [207] 课程表
//
// https://leetcode.cn/problems/course-schedule/
//
// Difficulty: Medium
// Tags: 深度优先搜索, 广度优先搜索, 图, 拓扑排序, 有向无环图

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map(), indeg = new Array(numCourses).fill(0);
    for (const v of prerequisites) {
        if (!map.has(v[1])) map.set(v[1], []);
        map.get(v[1]).push(v[0]);
        indeg[v[0]] ++;
    }
    let queue = [], cnt = 0;
    for (let i = 0; i < numCourses; i ++) if(!indeg[i]) queue.push(i);
    while (queue.length) {
        let cur = queue.shift();
        cnt ++;
        let nxt = map.get(cur) || [];
        for (let v of nxt) {
            indeg[v] --;
            if (!indeg[v]) queue.push(v);
        }
    }
    return cnt === numCourses;
};
// @lc code=end

