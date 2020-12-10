// @ts-check
// BEGIN (write your solution here)
const findIndexOfNearest = (arr, num) => {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return 0;
    }
    let acc = 0;
    let index = 0;
    for (let i = 1; i < arr.length; i += 1) {
      if (num - arr[i] === 0) {
        return i;
      }
      if (Math.abs(num - arr[i]) < Math.abs(num - arr[i - 1])) {
        index = i;
        acc = Math.abs(num - arr[i]);
      } else {
        acc = Math.abs(num - arr[i - 1]);
      }
    }
    return index;
  };
  export default findIndexOfNearest;
  // END