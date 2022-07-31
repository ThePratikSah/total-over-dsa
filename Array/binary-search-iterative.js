const sortedArray = [1, 3, 7, 9, 19, 24, 37, 63, 87];
const target = 7;

function binarySearch(sortedArray, target) {
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (sortedArray[middle] === target) return middle;
    else if (sortedArray[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

console.log(binarySearch(sortedArray, target));
