## 插入排序

插入排序是每次排一个数组项，以此方式构建最后的排序数组。

```js
function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = array[i]
    while(j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}
```

排序小型数组时，插入排序比选择排序和冒泡排序性能要好。

最佳情况: **T(n) = O(n)**
最坏情况: **T(n) = O(n<sup>2</sup>)**
平均情况: **T(n) = O(n<sup>2</sup>)**

