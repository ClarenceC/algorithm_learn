## 选择排序

**选择排序**

首先，找到数组中最小的那个元素，其次，将它和数组的第一个元素交换位置(如果第一个元素就是 最小元素那么它就和自己交换)，再次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。直到将整个数组排序。这种方法叫 **选择排序**, 因为它在不断地选择剩余元素之中的最小者。

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

选择排序是一个最普遍的算法，是一个原地排序算法，并且是一种不稳定的排序算法

最佳情况: 输入数组按升序排列 **T(n) = O(n<sup>2</sup>)**

最坏情况: 输入数组按降序排列 **T(n) = O(n<sup>2</sup>)**

平均情况: **T(n) = O(n<sup>2</sup>)**