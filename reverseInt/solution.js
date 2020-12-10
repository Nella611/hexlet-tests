// BEGIN (write your solution here)
const reverseInt = (num) => {
    let result = '';
    if (num < 0) {
      result = `-${result}`;
    }
    let modulNum = Math.abs(num);
    for (; modulNum / 10 > 0; modulNum = (modulNum - (modulNum % 10)) / 10) {
      result = `${result}${modulNum % 10}`;
    }
    return parseInt(result);
  };
  export default reverseInt;
  // END