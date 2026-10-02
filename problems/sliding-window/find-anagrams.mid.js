//
// @lc app=leetcode id=438 lang=javascript
//
// [438] 找到字符串中所有字母异位词
//
// https://leetcode.cn/problems/find-all-anagrams-in-a-string/
//
// Difficulty: Medium
// Tags: 哈希表, 字符串, 滑动窗口

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let ans = [], arr = new Array(26).fill(0), flag = 'a'.charCodeAt();
    for (const ch of p) arr[ch.charCodeAt() - flag] ++;
    let l = 0;
    for (let r = 0; r < s.length; r ++) {
        arr[s[r].charCodeAt() - flag] --;
        while (arr[s[r].charCodeAt() - flag] < 0) {
            arr[s[l].charCodeAt() - flag] ++;
            l ++;
        }
        if (r - l + 1 === p.length) ans.push(l);
    }
    return ans
};
// @lc code=end

