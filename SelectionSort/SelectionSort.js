var arr = [2, 7, 3, 5, 6, 9, 1, 1, 0, 10]

function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
    }
    [array[i], array[indexMin]] = [array[indexMin], array[i]]
  }
  return array
}

console.log(selectionSort(arr))