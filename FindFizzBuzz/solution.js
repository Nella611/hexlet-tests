/* eslint-disable no-console */

// BEGIN (write your solution here)
const fizzBuzz = (num1, num2) => {
    for (let index = num1; index <= num2; index += 1) {
      let result = '';
      if (index % 3 === 0) {
        result = `${result}Fizz`;
      } if (index % 5 === 0) {
        result = `${result}Buzz`;
      } if (index % 3 !== 0 && index % 5 !== 0) {
        result = index;
      } console.log(result);
    }
  };
  export default fizzBuzz;
  // END