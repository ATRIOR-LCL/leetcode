//
// @lc app=leetcode id=234 lang=javascript
//
// [234] 回文链表
//
// https://leetcode.cn/problems/palindrome-linked-list/
//
// Difficulty: Easy
// Tags: 栈, 递归, 链表, 双指针

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let tmp = slow.next;
    let first = head, second = reverse(tmp);
    while (first && second) {
        if (first.val !== second.val) return false;
        first = first.next, second = second.next;
    }
    return true;
};

var reverse = (node) => {
    let pre = null, cur = node;
    while (cur) {
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}
// @lc code=end

