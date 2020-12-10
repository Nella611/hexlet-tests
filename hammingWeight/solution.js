// BEGIN (write your solution here)
const binaryNum = (num) => {
    const result = [];
    for (let i = num; i > 0;) {
      result.push(i % 2);
      i -= Math.floor(i / 2) + (i % 2);
    }
    return result;
  };
  const hammingWeight = (num) => {
    const binaryNumber = binaryNum(num);
    let result = 0;
    for (const oneOrZero of binaryNumber) {
      if (oneOrZero === 1) {
        result += 1;
      }
    }
    return result;
  };
  export default hammingWeight;
  // END