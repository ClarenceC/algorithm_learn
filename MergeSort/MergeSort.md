## 归并排序

归并排序，是建立在归并操作上的一种有效排序，稳定的算法，复杂度为**O(nlog(n))**, 归并排序的性能比 冒泡排序，插入排序，选择排序性能都要好。

```js
function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function merge(left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []
  while(i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}
```

最佳情况: **T(n) = O(nlog(n))**
最坏情况: **T(n) = O(nlog(n))**
平均情况: **T(n) = O(nlog(n))**

