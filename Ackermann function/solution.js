// BEGIN (write your solution here)
const ackermann = (num1, num2) => {
    let result = 0;
    if (num1 === 0) {
      result = num2 + 1;
    } else if (num1 > 0 & num2 === 0) {
      result += ackermann((num1 - 1), 1);
    } else if (num1 > 0 & num2 > 0) {
      result += ackermann((num1 - 1), ackermann(num1, (num2 - 1)));
    } return result;
  };
  export default ackermann;
  // END