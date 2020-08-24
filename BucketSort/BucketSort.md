## 桶排序

桶排序也是分布式排序算法，它将元素分为不同的桶，再使用一个简单的排序算法，来对每个桶进行排序。

```js
function createBuckets(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]

  for(let i =  1; i < array.length; i++) {
    if(array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount;  i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) /  bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]) // 插入排序对每个桶进行排序
      sortedArray.push(...buckets[i]) // 再放到一个大桶中
    }
  }
  return sortedArray
}

function bucketSort(array, bucketSize = 5)  {
  if (array.length < 2) {
    return array
  }
  const buckets = createBuckets(array, bucketSize)
  return sortbuckets(buckets)
}
```

空间复杂度: **O(n+k)**

最佳情况: 输入数组按升序排列 **T(n) = O(n+k)**

最坏情况: 输入数组按降序排列 **T(n) = O(n<sup>2</sup>)**

平均情况: **T(n) = O(n+k)**