//
// @lc app=leetcode id=141 lang=javascript
//
// [141] 环形链表
//
// https://leetcode.cn/problems/linked-list-cycle/
//
// Difficulty: Easy
// Tags: 哈希表, 链表, 双指针, Floyd 判圈算法

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
// @lc code=end
