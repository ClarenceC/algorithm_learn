## 冒泡排序

**冒泡排序**, 比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样。

```js

function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function swap(array, a, b) {
  // 3 变量替换
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
  // or
  [array[a], array[b]] = [array[b], array[a]] // ES6 解构替换
}

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

// 优化冒泡排序
function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + j]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
```

最佳情况: 输入数组按升序排列 **T(n) = O(n)**
最坏情况: 输入数组按降序排列 **T(n) = O(n<sup>2</sup>)**
平均情况: **T(n) = O(n<sup>2</sup>)**