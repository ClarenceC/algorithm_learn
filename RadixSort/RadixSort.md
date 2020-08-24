## 基数排序

基数排序也是一个分布式排序算法，它根据数字的有效位或基数将整数分布到桶中。基数是基于数组中值的记数制的。非选择排序一般速度都会比较快，但也会有数量和整数限制。

- 取得数组中的最大值和最细值

```js
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex
  const buckets = []
  const aux = []
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
    buckets[bucketsIndex]++ // 计算排序
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i-1] // 累计结果
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
    aux[--buckets[bucketsIndex]] = array[i] // 再把桶数组值配对给 aux 数组
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i] // 赋值给 array 数组
  }
  return array
}
function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)

  let significantDigit = 1
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }
  return array
}
```

空间复杂度: **O(n+k)**

最佳情况: 输入数组按升序排列 **T(n) = O(nk)**

最坏情况: 输入数组按降序排列 **T(n) = O(nk)**

平均情况: **T(n) = O(nk)**