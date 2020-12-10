// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
    const sumSquare = () => {
      let result = 0;
      for (let index = 1; index <= n; index += 1) {
        result += index ** 2;
      } return result;
    };
    const squareSum = () => {
      let sum = 0;
      for (let index = 1; index <= n; index += 1) {
        sum += index;
      } return sum ** 2;
    };
    return squareSum() - sumSquare();
  };
  // END
  
  export default sumSquareDifference;