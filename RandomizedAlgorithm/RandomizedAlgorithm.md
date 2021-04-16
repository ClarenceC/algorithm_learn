## 随机算法

### Fisher-Yates 随机

```js
function shuffle(array) { // 洗牌
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)) // 随机一个位置的 Index
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    // or
    swap(array, i, randomIndex) // 交换随机的位置
  }
}
```

