const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
  
    return sum;
  };
  
  // BEGIN (write your solution here)
  const isHappyNumber = (num) => {
    const result = sumOfSquareDigits(num);
    if (String(result).length > 1) {
      return isHappyNumber(result);
    } return result === 1;
  };
  export default isHappyNumber;
  // END