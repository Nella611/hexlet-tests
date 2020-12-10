// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
    let result = 0;
    for (let index = 1; index < num; index += 1) {
      if (num % index === 0) {
        result += index;
      }
    }
    return result > 0 && result === num;
  };
  // END
  
  export default isPerfect;