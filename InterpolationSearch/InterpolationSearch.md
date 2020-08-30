## 内插搜索

内插搜索是改良版的二分搜索。二分搜索总是检查对比 mid 位置上的值，而内插搜索会根据搜索的值检查数组中不同地方的值。(要求已排序)

- 使用 position 公式选中一个值
- 如果这个值是待搜索值，那么算法执行完成。
- 如果待搜索值比选中值要小，则返回搜索值左边的子数组中寻找。
- 如果待搜索值比选中值要大，则返回搜索值右边的子数组中寻找。

```js
function lesserOrEquals(a, b, compareFn) {
  const comp  = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

function bbiggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

function interpolationSearch(array, value, compareFn = defaultCompare, diffFn = defaultDiff) {
  const { length } = array
  let low = 0
  let high = length - 1
  let position = -1
  let delta = -1
  while(
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lesserOrEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
    position = low + Math.floor((high - low) * delta)
    if (equalsFn(array[position], value)) {
      return position
    }
    if (compareFn(array[position], value)  === Compare.LESS_THAN) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return DOES_NOT_EXIST
}
```