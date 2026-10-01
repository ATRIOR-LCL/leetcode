//
// @lc app=leetcode id=20 lang=javascript
//
// [20] 有效的括号
//
// https://leetcode.cn/problems/valid-parentheses/
//
// Difficulty: Easy
// Tags: 栈, 字符串, 括号序列

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const isLeft = (ch) => {
        return ch === '(' || ch === '[' || ch === '{';
    }

    for (let ch of s) {
        if (isLeft(ch)) stack.push(ch);
        else {
            let top = stack[stack.length - 1];
            if (top === '(' && ch === ')' || top === '[' && ch === ']' || top === '{' && ch === '}') stack.pop();
            else return false;
        }
    }
    if (!stack.length) return true;
    return false;
};
// @lc code=end

