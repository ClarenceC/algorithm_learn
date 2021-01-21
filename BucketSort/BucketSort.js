var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function createBuckets(array, bucketSize) {
  // 获取最小值，和最大值
  let minValue = array[0]
  let maxValue = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    }else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  // 计算桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1

  // 建桶
  const buckets = [] // 桶二维列表
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }

  // 入桶
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize) // 当前值 - 最小值 / 桶尺寸计算入那个桶
    buckets[bucketIndex].push(array[i])
  }
  return buckets // 返回桶列表
}

// 排序
function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      buckets[i].sort((a, b) =>  a - b) // 桶内再排序, 一般是快速排序
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}

function bucketSort(array) {
  if (array.length < 2) { return array }
  const bucketSize = 3 // 桶尺寸
  const buckets = createBuckets(array, bucketSize)
  return sortBuckets(buckets)
}

console.log(bucketSort(arr))