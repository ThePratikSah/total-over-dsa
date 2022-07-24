/**
 * main execution of the code
 */
function main() {
  const arr = [1, 2, 3, 4, 2, 1];

  const isPalindrome = palindromeChecker(arr, 0, arr.length - 1);

  if (isPalindrome) {
    console.log("The array is palindrome");
  } else {
    console.log("Not palindrome");
  }

  function palindromeChecker(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) return true;
    if (!isEqual(arr[startIndex], arr[endIndex])) {
      return false;
    }
    if (!palindromeChecker(arr, startIndex + 1, endIndex - 1)) return false;
    return true;
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
