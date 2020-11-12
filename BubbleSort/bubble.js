// 手动实现冒泡

var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function bubble (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) { // 每个数都循环一遍，需要循环两遍
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}

console.log(bubble(arr))

