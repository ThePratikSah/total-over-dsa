const randArray = [11, 3, 7, 9, 1, 4, 3, 6, 8];

for (let i = 0; i < randArray.length - 1; i++) {
  for (let j = i + 1; j < randArray.length; j++) {
    if (randArray[i] > randArray[j]) swap(randArray, i, j);
  }
}

console.log(randArray);

function swap(arr, firstIndex, secondIndex) {
  const tempVal = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tempVal;
}
