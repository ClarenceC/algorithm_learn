var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]


function countingSort(array) {
  if (array.length < 2) { return array }
  let maxValue = 0
  array.forEach(item => {
    if (item > maxValue) {
      maxValue = item
    }
  })

  const counts = new Array(maxValue + 1)
  array.forEach(item => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item]++
  })

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