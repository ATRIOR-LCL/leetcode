//
// @lc app=leetcode id=131 lang=javascript
//
// [131] 分割回文串
//
// https://leetcode.cn/problems/palindrome-partitioning/
//
// Difficulty: Medium
// Tags: 字符串, 动态规划, 回溯

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isSub = (t) => {
        let l = 0, r = t.length - 1;
        while (l < r) {
            if (t[l] !== t[r]) return false;
            l ++, r --;
        }
        return true;
    }

    let n = s.length, ans = [], path = [];
    const dfs = (i) => {
        if (i === n) {
            ans.push([...path]);
            return ;
        }

        for (let j = i; j < n; j ++) {
            let sub = s.substring(i, j + 1);
            if (isSub(sub)) {
                path.push(sub);
                dfs(j + 1);
                path.pop();
            }
        }
    }
    dfs(0);
    return ans;
};
// @lc code=end

