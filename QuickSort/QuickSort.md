## 快速排序

快速排序也是最常用的算法，因为性能通常比，冒泡，插入，选择都要好，和归并排序一样。

快速排序的步骤:

1. 从数组中选择一个值作为 **主元(pivot)**, 数组中中间的值。
2. **划分**操作，创建两个指针引用,左边指向数组头，右边指向数组尾，跟着移动左指针直到找到一个比**主元**大的值，移动右指针直到找到一个比**主元**小的值，直到找到一个比主元小的值，然后重复这个过程，直到左指针超过了右指针。这个过程后会把主元小的值都排左**主元**左边，大的值排在右边。
3. 接着，算法对划分后的小数组递归操作，重复的两个步骤，直至数组已完全排序。


```js
function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : BIGGER_THAN
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while(i <= j) {
    while(compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
    }
    while(compareFn(array[j], pivot) === COmpare.BIGGER_THAN) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort(array, left, right, compareFn) {
  return quick(array, 0, array.length - 1, compareFn)
}

function quick(array, left, right, compareFn = defaultCompare) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if(index > right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}
```


空间复杂度: **O(nlog(n))**

最佳情况: **T(n) = O(nlog(n))**
最坏情况: **T(n) = O(n<sup>2</sup>)**
平均情况: **T(n) = O(nlog(n))**