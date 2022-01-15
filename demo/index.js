/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIndex = 0,  // 获取第一位的索引
    lastIndex = nums.length - 1, // 获取最后一位的索引
    middleIndex = Math.floor((firstIndex + lastIndex) / 2) // 获取中间的索引
  // 在中间值不等于找找找的值的时候 并且第一位的索引小于最后一位索引的时候才开始执行循环
  // 否则在下面直接返回
  while (nums[middleIndex] !== target && firstIndex <= lastIndex) {
    // 如果中间值大于需要找到的值 说明要找的值在中间值的左侧
    // 就需要将最后一位的索引改为 middleIndex - 1
    if (nums[middleIndex] > target) {
      lastIndex = middleIndex - 1
      // 如果中间值小于需要找到的值 说明要找的值在中间值的右侧
      // 就需要将第一位的索引改为 middleIndex + 1
    } else {
      firstIndex = middleIndex + 1
    }
    // 每次循环重置中间的索引
    middleIndex = Math.floor((firstIndex + lastIndex) / 2)
  }
  // 如果中间值等于需要找到的值 则直接返回索引 找不到则返回 -1
  return nums[middleIndex] === target ? middleIndex : -1
}


console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
