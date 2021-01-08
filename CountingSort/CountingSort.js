var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]


function countingSort(array) {
  if (array.length < 2) { return array }
  let maxValue = 0
  // 获取最大值
  array.forEach(item => {
    if (item > maxValue) {
      maxValue = item
    }
  })

  // 分桶
  const counts = new Array(maxValue + 1)
  // 按值的索引加入桶
  array.forEach(item => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item]++
  })

  // 读桶
  let sortedIndex = 0
  counts.forEach((count, index) => {
    while(count > 0) {
      array[sortedIndex++] = index
      count--
    }
  })
  return array
}

console.log(countingSort(arr))