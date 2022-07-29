// the array will always be sorted
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;

let resArr = [];

/**
 *
 * @param {Int} array in ascending order
 * @param {Int} start starting index of an array
 * @param {Int} end end index of array
 * @param {Int} target to find
 * @returns
 */
function findSumPairs(array, start, end, target) {
  if (start >= end) return;
  if (array[start] + array[end] > target) {
    findSumPairs(array, start, end - 1, target);
  } else if (array[start] + array[end] < target) {
    findSumPairs(array, start + 1, end, target);
  } else {
    resArr.push([array[start], array[end]]);
    findSumPairs(array, start + 1, end - 1, target);
  }
}

findSumPairs(array, 0, array.length - 1, target);

console.log(resArr);
