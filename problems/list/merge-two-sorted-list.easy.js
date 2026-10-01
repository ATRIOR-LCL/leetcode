//
// @lc app=leetcode id=21 lang=javascript
//
// [21] 合并两个有序链表
//
// https://leetcode.cn/problems/merge-two-sorted-lists/
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    let p1 = list1, p2 = list2, tail = head;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            tail.next = p1;
            p1 = p1.next;
        } else {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }
    if (p1) tail.next = p1;
    if (p2) tail.next = p2;
    return head.next;
};
// @lc code=end

