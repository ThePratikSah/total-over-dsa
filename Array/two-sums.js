const arr = [1, 4, 2, 9, 7, 5];
const target = 9;

function twoSums(arr, target) {
  let tempObj = {},
    tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!tempObj.hasOwnProperty(target - arr[i])) {
      tempObj[arr[i]] = i;
    } else {
      tempArr.push([i, tempObj[target - arr[i]]]);
    }
  }
  return tempArr;
}

console.log(twoSums(arr, target));
