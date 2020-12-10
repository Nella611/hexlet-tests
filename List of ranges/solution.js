// @ts-check

// BEGIN (write your solution here)
const summaryRanges = (arr) => {
    const sequences = [];
    let firstNumFlag = 0;
    let firstNum;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i + 1] - arr[i] === 1) {
        if (firstNumFlag === 0) {
          firstNumFlag += 1;
          firstNum = arr[i];
        }
      } else {
        if (firstNumFlag > 0) {
          sequences.push(`${firstNum}->${arr[i]}`);
          firstNum = 0;
          firstNumFlag = 0;
        }
      }
    }
    return sequences;
  };
  export default summaryRanges;
  // END