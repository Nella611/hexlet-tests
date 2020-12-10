// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
    let mistake = 0;
    for (let index = 0; index < str.length; index += 1) {
      if (str[index] === '(') {
        mistake += 1;
      } else if (str[index] === ')') {
        mistake -= 1;
        if (mistake < 0) {
          return false;
        }
      }
    } if (mistake !== 0) {
      return false;
    } return true;
  };
  export default areBracketsBalanced;
  // END