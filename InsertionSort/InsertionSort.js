var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function insertionSort (array) {
  const { length } = array
  let current

  // 默认第一个元素已经排序
  for (let i = 1; i < length; i++) {
    let j = i // j 索引等于 i
    current = array[i] // 获取当前值
    while (j > 0 && array[j - 1] > current) { // 如果该元素小于前一个元素
      array[j] = array[j - 1] // 全部顺序移一位
      j--
    }
    array[j] = current // 直到找到合适的位置再放进去
  }
  return array
}

// [0, 1, 1, 2, 3, 5, 6, 7, 9, 10]

