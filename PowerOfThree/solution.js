// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
    for (let index = 0; index <= num; index += 1) {
      if (num === 3 ** index) {
        return true;
      }
    } return false;
  };
  export default isPowerOfThree;
  // END