// BEGIN (write your solution here)
const calc = (num1, simbol, num2) => {
    const signsOfMath = ['+', '-', '*', '/'];
    let result;
    switch (signsOfMath.indexOf(simbol)) {
      case 0:
        result = num2 + num1;
        break;
      case 1:
        result = num2 - num1;
        break;
      case 2:
        result = num2 * num1;
        break;
      case 3:
        result = num2 / num1;
        break;
    }
    return result;
  };
  const calcInPolishNotation = (arr) => {
    const signsOfMath = ['+', '-', '*', '/'];
    const numbers = [];
    for (const simbol of arr) {
      if (!signsOfMath.includes(simbol)) {
        numbers.push(simbol);
      } else {
        numbers.push(calc(numbers.pop(), simbol, numbers.pop()));
      }
    }
    return numbers[0];
  };
  export default calcInPolishNotation;
  // END