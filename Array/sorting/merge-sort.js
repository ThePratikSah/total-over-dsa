let arr = [9, 3, 1, 8];

/**
 *
 * @param {int} leftArr
 * @param {int} rightArr
 * @returns []
 */
function mergeArray(leftArr, rightArr) {
  let aPtr = 0;
  let bPtr = 0;
  const sortedArr = [];

  while (aPtr < leftArr.length && bPtr < rightArr.length) {
    if (leftArr[aPtr] < rightArr[bPtr]) {
      sortedArr.push(leftArr[aPtr]);
      aPtr += 1;
    } else {
      sortedArr.push(rightArr[bPtr]);
      bPtr += 1;
    }
  }

  while (aPtr < leftArr.length) {
    sortedArr.push(leftArr[aPtr]);
    aPtr += 1;
  }

  while (bPtr < rightArr.length) {
    sortedArr.push(rightArr[bPtr]);
    bPtr += 1;
  }

  return sortedArr;
}

/**
 *
 * @param {int} arr
 * @returns []
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArray(left, right);
}

console.log(mergeSort(arr));
