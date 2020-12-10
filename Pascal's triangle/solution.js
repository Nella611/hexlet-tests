// BEGIN (write your solution here)
const generate = (num) => {
    const result = [1];
    if (num === 0) {
      return result;
    }
    const fakt = (number) => {
      let faktOfNum = 1;
      for (let index = 1; index <= number; index += 1) {
        faktOfNum *= index;
      }
      return faktOfNum;
    };
    for (let i = 1; i <= num; i += 1) {
      const numOfIndex = fakt(num) / (fakt(i) * fakt(num - i));
      result.push(numOfIndex);
    }
    return result;
  };
  export default generate;
  // END