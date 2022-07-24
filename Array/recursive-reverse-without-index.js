/**
 * main execution
 */
function main() {
  const arr = new Array(10).fill(0).map((ele, i) => i + 1);
  let start = 0;
  reverseArray(arr, 0);
  printArray(arr);

  /**
   * this function will reverse an array recursively
   * @param {Int} arr
   * @param {Int} front
   * @param {Int} back
   * @returns undefined
   */
  function reverseArray(arr, front) {
    if (front >= arr.length) return;
    reverseArray(arr, front + 1);
    if (start < front) {
      swap(arr, start, front);
      start += 1;
    }
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
    console.log(arr);
  }
}

main();
