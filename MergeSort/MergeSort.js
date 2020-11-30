var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function merge(left, right) {
  // 双指针
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

function mergeSort(array) {
  if (array.length < 2) { return array }
  const { length } = array
  const middle = Math.floor(length / 2)
  const left = mergeSort(array.slice(0, middle))
  const right = mergeSort(array.slice(middle, length))
  array = merge(left, right)
  return array
}

console.log(mergeSort(arr))