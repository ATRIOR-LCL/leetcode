//
// @lc app=leetcode id=22 lang=javascript
//
// [22] 括号生成
//
// https://leetcode.cn/problems/generate-parentheses/
//
// Difficulty: Medium
// Tags: 字符串, 动态规划, 回溯, 括号序列

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let leftCnt = 0, rightCnt = 0, path = [], ans = [];
    const dfs = () => {
        if (path.length === 2 * n) {
            ans.push(path.join(''));
            return ;
        }
        if (leftCnt < n) {
            leftCnt ++;
            path.push("(");
            dfs();
            path.pop();
            leftCnt --;
        }

        if (rightCnt < leftCnt) {
            rightCnt ++;
            path.push(")");
            dfs();
            path.pop();
            rightCnt --;
        }
    }
    dfs();
    return ans;
};
// @lc code=end

