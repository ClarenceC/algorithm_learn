## 顺序搜索

顺序搜索，即线性搜索是最基本的搜索算法， 他与一个线性数据结构里面的内容一一比较，最后值相等的时候返回，是一个比较低效的搜索算法。

```js
const DOES_NOT_EXIST = -1
function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }
  return DOES_NOT_EXIST
}
```

