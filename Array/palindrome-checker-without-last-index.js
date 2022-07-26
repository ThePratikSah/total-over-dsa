/**
 * main execution of the code
 */
function main() {
  const arr = [1, 2, 3, 3, 2, 1];
  let start = 0;

  if (palindromeChecker(arr, 0)) {
    console.log("Palindrome");
  } else {
    console.log("!palindrome");
  }

  function palindromeChecker(arr, index) {
    if (index >= arr.length) return true;
    if (!palindromeChecker(arr, index + 1)) return false;
    if (isEqual(arr[start], arr[index])) {
      start += 1;
      return true;
    }
  }

  /**
   * this function will check if the numbers are equal or not
   * @param {Int} elementFirst
   * @param {Int} elementSecond
   * @returns boolean
   */
  function isEqual(elementFirst, elementSecond) {
    return elementFirst === elementSecond;
  }
}

main();
