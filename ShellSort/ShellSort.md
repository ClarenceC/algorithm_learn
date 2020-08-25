## 希尔排序

希尔排序是插入排序的一种又称**缩小增量排序(Diminishing Increment Sort)**, 是直接插入排序算法的一种更高效的改进版本。

```js
function shellSort(arr) {
  var len = arr.length
      temp,
      gap = 1
    while(gap < len/3) {
      gap = gap*3+1
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
      for (var i = gap; i < len; i++) {
        temp = arr[i]
        for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
          arr[j+gap] = arr[j]
        }
        arr[j+gap] = temp
      }
    }
    return arr
}
```

空间复杂度: **O(1)**

最佳情况: 输入数组按升序排列 **T(n) = O(nlog(n))**

最坏情况: 输入数组按降序排列 **T(n) = O(nlog(n)<sup>2</sup>)**

平均情况: **T(n) = O(nlog(n)<sup>2</sup>)**