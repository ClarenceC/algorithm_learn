var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

var quickSort = function(arr) {
  if (arr.length <= 1) { return arr }
  let privotIndex = Math.floor(arr.length / 2) // 取中间值为基准 Privot

  let privot = arr.splice(privotIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([privot], quickSort(right))
}

console.log(quickSort(arr))


