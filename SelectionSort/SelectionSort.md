## 选择排序

**选择排序**，选择排序是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值放在第二位。

```js
function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if(compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}
```

选择排序是一个最普遍的算法

最佳情况: 输入数组按升序排列 **T(n) = O(n<sup>2</sup>)**

最坏情况: 输入数组按降序排列 **T(n) = O(n<sup>2</sup>)**

平均情况: **T(n) = O(n<sup>2</sup>)**