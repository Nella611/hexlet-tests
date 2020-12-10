// BEGIN (write your solution here)
const isContinuousSequence = (arr) => {
    if (arr.length <= 1) {
      return false;
    }
    for (let i = 0; i < arr.length - 2; i += 1) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return false;
      }
    }
    return true;
  };
  export default isContinuousSequence;
  // END