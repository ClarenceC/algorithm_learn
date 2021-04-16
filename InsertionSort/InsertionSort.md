## 插入排序

插入排序是将数组中的数据分为两个区间，**已排序区间**和**未排序区间**, 初始已排序区间只有一个元素，就是数组的第一个元素，插入算法的的核心是取未排中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束。


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

