// BEGIN (write your solution here) (write your solution here)
const withoutTwoZeros = (numZero, numOne) => {
    if ((numZero - numOne) === 1) {
      return 1;
    } if (numOne < numZero) {
      return 0;
    }
    const fakt = (num) => {
      let result = 1;
      for (let index = 1; index <= num; index += 1) {
        result *= index;
      } return result;
    };
    return fakt(numOne + 1) / (fakt(numZero) * fakt(numOne + 1 - numZero));
  };
  
  export default withoutTwoZeros;
  // END