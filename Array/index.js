/**
 * Array's
 */

/**
 * Utility Functions
 */

function swap(idx1, idx2, arr) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//Creating an array of size 10
let arr = new Array(10).fill(-1).map((item, idx) => idx + 1);

/**
 * Traditional traversal of an array
 * @param {Integer} idx
 * @param {Array} arrToTraverse
 */
function traditionalTraversal(idx, arrToTraverse) {
  for (let i = idx; i < arrToTraverse.length; i++) {
    console.log(arrToTraverse[i]);
  }
}
//traditionalTraversal(0, arr);

/**
 * Recursive Traversal of an array
 * @param {Integer} idx
 * @param {Array} arrToTraverse
 */
function traversal(idx, arrToTraverse) {
  if (idx >= arrToTraverse.length) return;
  console.log(arr[idx]);
  traversal(idx + 1, arrToTraverse);
}
//traversal(0, arr);

/**
 * Reverse Array
 * @param {Integer} idx
 * @param {Array} arrToreverse
 */
function reverseArray(idx, arrToreverse) {
  let startIdx = 0;
  function helper(idx, arrToreverse) {
    if (idx >= arrToreverse.length) return;

    helper(idx + 1, arrToreverse);

    if (startIdx < idx) {
      swap(startIdx, idx, arrToreverse);
    }
    startIdx += 1;
  }
  helper(idx, arrToreverse);
  function swap(idx1, idx2, arr) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}

// reverseArray(0, arr);
// console.log(arr);

/**
 * Palindrome in Array
 * @param {Array} arrToCheck
 */

let palindromArr = [];
function checkPalindrome(arrToCheck) {
  let startIdx = 0;
  function helper(idx, arrToCheck) {
    if (idx >= arrToCheck.length) return true;

    if (!helper(idx + 1, arrToCheck)) return false;
    let ansToReturn = true;
    if (startIdx <= idx) {
      ansToReturn = arrToCheck[startIdx] == arrToCheck[idx] ? true : false;
    }

    startIdx += 1;
    return ansToReturn;
  }
  return helper(0, arrToCheck);
}

console.log(checkPalindrome(palindromArr));
