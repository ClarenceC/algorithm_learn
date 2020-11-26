var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function insertionSort (array) {
  const { length } = array
  let temp

  for (let i = 1; i < length; i++) {
    let j = i
    current = array[i]
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = current
  }
  return array
}

// [0, 1, 1, 2, 3, 5, 6, 7, 9, 10]

