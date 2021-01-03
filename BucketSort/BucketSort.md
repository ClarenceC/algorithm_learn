## 桶排序

桶排序，核心思想是将要排序的数据分到几个有序的桶里，每个桶里的数据再单独进行排序。桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。

桶排序不能代替其它排序因为：
1. 桶排序的数据需要很容易就能划分成 m 个桶，并且，桶与桶之间有着天然的大小顺序，这样每个桶内的数据排完序之后，桶与桶之间的数据不需要再进行排序。

2. 数据在各个桶之间的分布是比较均匀的，如果数据经过桶的划分之后，有些桶里的数据非常多，有些非常少，不平均，那么时间复杂度就不是常量级，退化为 **O(nlogn)** 排序算法了。

桶排序比较适合用在外部排序中。所谓外部排序即是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中。


![](./images/987564607b864255f81686829503abae.jpg)

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

最佳情况: 输入数组按升序排列 **T(n) = O(n)**

最坏情况: 输入数组按降序排列 **T(n) = O(n<sup>2</sup>)**

平均情况: **T(n) = O(n+k)**