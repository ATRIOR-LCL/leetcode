# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## What this repo is

Personal daily LeetCode practice. JavaScript solutions, one file per problem, pasted in the
`leetcode.cn` submission format (the `// @lc app=...` header comments are required by that
editor — keep them). `log.md` is the practice log: one dated table per session, rows keyed by
LeetCode number.

## Layout

```
problems/<category>/<problem-slug>.<difficulty>.js   # difficulty is easy | mid | hard
js/<category>/<problem-slug>.<difficulty>.js         # JS 基础/手写题（无 @lc 头）
log.md                                               # dated log of completed problems
package.json                                         # placeholder only, no real scripts
```

Categories currently in use: `hash`, `two-pointers`, `list`, `tree`, `binary-search`, `stack`, `dp`,
`array`, `dfs`, `graph`, `sliding-window`.
New problem goes in the category matching its main technique; new category = new directory.

`js/` holds JavaScript language-basics problems (closures, hand-written array methods). These files
have no `// @lc` header block, so their LeetCode number must be looked up, not read from the file.

## File format

Every solution file follows the same shape. Match it when adding one:

- `// @lc app=leetcode id=<n> lang=javascript` header block, title, `leetcode.cn` problem URL,
  `Difficulty`, `Tags`.
- Solution strictly between `// @lc code=start` and `// @lc code=end`. Only `var <fn> = function (...) {}`
  lives there — no `require`, no `module.exports`, no `console.log`, no local test harness.
- JSDoc `@param`/`@return` on the exported function.

Naming: function name is the camelCase name LeetCode expects (`twoSum`, `threeSum`, `climbStairs`).
Filename is kebab-case of the English title, plus difficulty suffix.

## Running a solution

No test framework, no runner, no exports. `package.json` `test` script is the npm placeholder and
exits 1 — do not try to fix or use it. To check a solution, run Node against the file with a call
appended, e.g.:

```bash
node -e "$(cat problems/hash/sum-of-two-numbers.easy.js); console.log(twoSum([2,7,11,15], 9));"
```

Write scratch checks this way; do not add test files or a test dependency to the repo.

## log.md 编写规则

Structure:

- One `## YYYY.MM.DD` heading per practice day, newest section appended at the end. Top-level
  heading `# leetcode logs` stays at the top.
- One markdown table per day. Algorithm table columns: `title | category | Time | solution`.
  `js/` problems get their own table under a `### js 模块` sub-heading within the same day, with
  columns `title | category | solution` — **no** `Time` column for js problems.
- Table separators must be half-width `|`. Full-width `｜` (U+FF5C) silently breaks the whole table —
  it renders as plain text, not a table. This has happened once already.
- Rows are sorted ascending by LeetCode number, so a new problem is inserted at its number position
  rather than appended at the end.

Column content:

- `title`: `<编号>. <中文题名>`, e.g. `20. 有效的括号`. Number comes from the file's
  `// @lc app=leetcode id=<n>` header; for `js/` files (no header) look the number up.
- `category`: the directory the file lives in (`hash`, `dfs`, ...). For `js/` problems use the bare
  subdirectory name (`closure`, `array`) — no `js/` prefix.
- `solution`: ONE line describing the approach **as actually written in this repo's file**. Read the
  file first. Never write the textbook version of the algorithm — the user's implementation often
  differs from it, and a generic description counts as wrong. Examples of what this means:
  - `283. 移动零` is a write-index + `fill(0)` overwrite, so it must not be described as 快慢指针.
  - `70. 爬楼梯` is top-down recursion with a cache array, not iterative DP.
  - `104. 二叉树的最大深度` carries a depth parameter and updates a global `ans`, it does not
    `return max(l, r) + 1`.
  - `234. 回文链表` uses `fast = head.next` and does not restore the list afterwards.
- `Time`: time complexity of the written implementation. Fill it for algorithm problems; the js
  table does not have this column. Write it as inline math in `$...$` — exponents and factorials go
  inside the math span (`$O(2^n)$`, `$O(n \cdot n!)$`, `$O(n^2)$`), never as plain `O(2^n)`.

## After solving

Append a row to the current date's table in `log.md` following the rules above, in the position its
LeetCode number dictates.

## Known inconsistencies

Existing files have filename typos (`palindorme-list.easy.js`, `langest-consecutive.mid.js`,
`sorted-array-to-bst.east.js`). Leave them alone unless the user asks for a rename.
