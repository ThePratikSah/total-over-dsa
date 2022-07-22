const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * function to print/traverse an array using for loop
 * @param {*} arr
 */
function loopArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

/**
 * function to traverse array recursively
 * @param {*} index
 * @param {*} arr
 * @returns undefined
 */
function traversal(index, arr) {
  // base case
  if (index >= arr.length) return;
  console.log(arr[index]);
  traversal(index + 1, arr);
}
