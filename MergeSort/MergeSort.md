## 归并排序

归并排序使用了分治思想，如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就变成有序了。

分治思想就是将一个大问题分解成小的子问题来解决，小的子问题解决了，大问题也就解决了。分治算法一般都是用递归来实现的，分治是一种解决问题的处理思想，递归是一种编程技巧。

![](./images/db7f892d3355ef74da9cd64aa926dc2b.jpg)

归并排序是一个稳定的排序算法，但不是原地排序算法

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

时间复杂度最佳情况: **T(n) = O(nlog(n))**
时间复杂度最坏情况: **T(n) = O(nlog(n))**
时间复杂度平均情况: **T(n) = O(nlog(n))**

空间时间复杂度: **O(n)**