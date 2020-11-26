## 时间空间复杂度

时间空间的复杂度分析:

### 时间复杂度

#### 大 O 表示法

所有代码的执行时间T(n)与每行代码的执行次数n成正比。
大O表达式。
```js
T(n) = O(f(n))
```
大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势，所以也叫做渐进时间复杂度(asymptotic time complexity), 简称时间复杂度。

时间复杂度分析：
1. 只关注循环执行次数最多的一段代码。
2. 加法法则：总复杂度等于量级最大的那段代码的时间复杂度。
3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积。


在算法的效率里面，通常是用资源，例如 CPU(时间)占用、内存占用、硬盘占用和网络占用。当用大 O 表示时，一般是考虑的是 CPU (时间) 占用。

- O(1): Constant Complexity: Constant 常数复杂度
- O(log n): Logarithmic Complexity: 对数复杂度
- O(n): Linear Complexity: 线性时间复杂度
- O(n<sup>2</sup>): N square Complexity 平⽅方
- O(n<sup>3</sup>): N square Complexity ⽴立⽅方
- O(2<sup>n</sup>): Exponential Growth 指数
- O(n!): Factorial 阶乘

![images](./images/WX20200817-104433.png)

- [大O 复杂度速查](https://www.bigocheatsheet.com/)

复杂度量级(按数量级递增)

多项式量级
常量阶 **O(1)**  
对数阶 **O(logn)**
线性阶 **O(n)**
线性对数阶 **O(nlogn)**
平方阶 **O(n<sup>2</sup>)**、立方阶**O(n<sup>3</sup>)** k次方阶**O(n<sup>k</sup>)**

非多项式量级
指数阶 **O(2<sup>n</sup>)**
阶乘阶 **O(n!)**

非多项式量级的算法问题叫作 NP（Non-Deterministic Polynomial 非确定多项式）问题，随着 n 越来越大时，非多项式量级算法的执行时间会急剧增加，所以非多项式时间复杂度是非常低效的。一般情况下，只要算法中不存在循环语句、递归语句，即使有成千上万行的代码，其时间复杂度也是 **O(1)**

- **O(1)**
**O(1)**只是常量 级时间复杂度的一种表示方法，并不是指只执行了一行代码。当下面函数，无论传什么参数运行一次函数，执行时间都一样，执行时间和参数无关，所以是 **O(1)** 常数。
```js
function increment(num) {
  return ++num
}
```
```js
int i = 8
int j = 6
int sum = i + j
```

- **O(logN)**、**O(nlogn)**

对数阶时间复杂度非常常见，同时敢是最难分析的一种时间复杂度。下面函数会使用时间会对数式减少， 或者二分查找法最坏的情况会出现 **O(logN)** 的复杂度。

```js
var count = 1
while(count < n) {
  count = count * 2
}
```
复杂度为 **O(log2<sup>n</sup>)**

```js
i = 1
while (i <= n) {
  i = i * 3
}
```
复杂度是 **O(log3<sup>n</sup>)**

所以上面都可以记为 **O(logn)** 忽略底数。

归并排序，快速排序复杂度都是 **O(nlogn)**




一般来说，如果一个算法复杂度为 **O(n<sup>k</sup>)**, 其中 k 是常数， 我们就认为这个算法是高效的，


- **O(n)**

下面函数查找值的次数时间占用O，跟 array.length 有关，在最坏的情况下会全部遍历一遍, 所以函数的时间复杂度就是 **O(n)**, **n** 是(输入) 数组的大小。

```js
function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }
  return -1
}
```

- **O(m+n)**、**O(m*n)**
这个代码的复杂度由两个数据的规模来决定。

```java

int cal(int m, int n) {
  int sum_1 = 0;
  int i = 1;
  for (; i < m; ++i) {
    sum_1 = sum_1 + i;
  }

  int sum_2 = 0;
  int j = 1;
  for (; j < n; ++j) {
    sum_2 = sum_2 + j;
  }

  return sum_1 + sum_2;
}
```

- **O(n<sup>2</sup>)**

时间复杂度 **O(n)** 的代码只有一层循环，而 **O(n<sup>2</sup>)**的代码有双层嵌套循环，如果算法有三层迭代数组的嵌套循环，它的时间复杂度很可能就是 **O(n<sup>3</sup>)**
```js
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN) {
        swap(array, j, j+1)
      }
    }
  }
  return array
}
```


![images](./images/WX20200818-115545.png)

### 空间复杂度分析

空间复杂度是，渐进空间复杂度(asymptotic space complexity), 表示算法的存储空间与数据规模之间的增长关系。

```java
void print(int n) {
  int i = 0;
  int[] a = new int[n];
  for (i; i <n; ++i) {
    a[i] = i * i;
  }

  for (i = n-1; i >= 0; --i) {
    print out a[i]
  }
}
````
因为没有占用更 多的空间，所以空间复杂度 **O(n)**

### 四个复杂度分析方面的知识点
最好情况时间复杂度(best case time complexity)
最坏情况时间复杂度(worst case time complexity)
平均情况时间复杂度(average case time complexity)
均摊时间复杂度(amortized time complexity)

```java
int find(int[] array, int n, int x) {
  int i = 0,
  int pos = -1
  for (; i < n; ++i) {
    if (array[i] == x) pos = i
  }
  return pos
}
```

时间复杂度为 **O(n)**

```java
int find(int[] array, int n, int x) {
  int i = 0,
  int pos = -1
  for (; i < n; ++i) {
    if (array[i] == x) { 
      pos = i
      break // 中途退出
    }
  }
  return pos
}
```
最好时间复杂度就是，在最理想的情况下，执行这段代码的时间复杂度。
最坏时间复杂度就是，在最糟糕的情况下，执行这段代码的时间复杂度。

最好时间复杂度 **O(1)**
最坏时间复杂度 **O(n)**

平均时间复杂度 **O(n)**

平均时间复杂度全称，加权平均时间复杂度或期望时间复杂度。

均摊时间复杂度，通过摊还分析得到的时间复杂度，叫均摊时间复杂度。
对一个数据结构进行一组连续操作中，大部分情况下时间复杂度都很低，只有个别情况下时间复杂度比较高，而且这些操作之间存在前后连贯的时序关系，这个时候，我们就可以将这一组操作放在一起分析，看是否能将较高时间复杂度妹子次操作的耗时平摊到其它时间复杂度低的操作上面，而且，在能够应用均摊时间复杂度分析的场合，一般均摊时间复杂度就等于最好了情况时间复杂度。

