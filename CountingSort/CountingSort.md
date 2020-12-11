## 计数排序

计数排序是分布式排序，分布式排序使用已组织好的辅助数据结构(桶), 进行合并，得到排好序的数组。计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组。在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序后的结果数组。作为一种线性时间复杂度的排序，计数排序要求输往后数据必须是有确定范围的整数。


计数排序是 一个**整数排序算法**,使用上会有局限。

```js

function findMaxValue(array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i]  > max) {
      max = array[i]
    }
  }
  return max
}

function countingSort(array) {
  if (array.length < 2) {
    return array
  }

  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })

  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}
```


时间复杂度: **O(n+k)**

最佳情况: 输入数组按升序排列 **T(n) = O(n+k)**

最坏情况: 输入数组按降序排列 **T(n) = O(n+k)**

平均情况: **T(n) = O(n+k)**