//
// @lc app=leetcode id=3 lang=javascript
//
// [3] 无重复字符的最长子串
//
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
//
// Difficulty: Medium
// Tags: 哈希表, 字符串, 滑动窗口

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, cnt = {}, ans = 0;
    for (let r = 0; r < s.length; r ++) {
        cnt[s[r]] = (cnt[s[r]] || 0) + 1;
        while (cnt[s[r]] > 1) {
            cnt[s[l]] --;
            l ++;
        }
        ans = Math.max(ans, r - l + 1)
    }
    return ans;
};
// @lc code=end

