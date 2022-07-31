const sortedArray = [1, 3, 7, 9, 19, 24, 37, 63, 87];
const target = 19;

let low = 0;
let high = sortedArray.length - 1;

function binarySearch(sortedArray, target, low, high) {
  if (low >= high) return -1;

  let middle = Math.floor((low + high) / 2);

  if (sortedArray[middle] === target) return middle;

  if (sortedArray[middle] < target) {
    return binarySearch(sortedArray, target, middle + 1, high);
  } else {
    return binarySearch(sortedArray, target, low, middle - 1);
  }
}

console.log(binarySearch(sortedArray, target, low, high));
