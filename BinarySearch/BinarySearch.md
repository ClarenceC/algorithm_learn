## 二分搜索

二分搜索算法的原理跟猜数字游戏类似，跟定一个数字在一个数字范围内，而后给出一个数字，判断是高了还是低了，还是对了。

- 选择数组的中间值。
- 如果是选中的值和搜索的值一样，则算法执行完成了。
- 如果搜索值比选中的值要小，即在中值左边的数组中去搜索。
- 如果待搜索的值比中值要大，则返回中值右边的子数组。

```js
function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array)
  let low = 0
  let hight = sortedArray.length - 1
  while(lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return DOES_NOT_EXIST
}
```

