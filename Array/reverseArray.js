/**
 * main execution
 */
function main() {
  const arr = new Array(10).fill(0).map((ele, i) => i + 1);

  reverseArray(arr, 0, arr.length - 1);
  printArray(arr);
}

main();

/**
 * this function will reverse an array recursively
 * @param {Int} arr
 * @param {Int} front
 * @param {Int} back
 * @returns undefined
 */
function reverseArray(arr, front, back) {
  if (front > back) return;
  swap(arr, front, back);
  reverseArray(arr, front + 1, back - 1);
}

/**
 * swapping the value of the
 * @param {Int} arr
 * @param {Int} firstIndex
 * @param {Int} secondIndex
 */
function swap(arr, firstIndex, secondIndex) {
  const tempVal = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tempVal;
}

/**
 * printing of array
 * @param {Int} arr
 */
function printArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}
