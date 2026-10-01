//
// @lc app=leetcode id=206 lang=javascript
//
// [206] 反转链表
//
// https://leetcode.cn/problems/reverse-linked-list/
//
// Difficulty: Easy
// Tags: 递归, 链表

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null, cur = head;
    while (cur) {
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
};
// @lc code=end

