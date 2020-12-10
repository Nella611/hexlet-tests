// BEGIN (write your solution here)
const reverse = (str) => {
    let result = '';
    const index = str.length - 1;
    if (index < 0) {
      return result;
    }
    result = `${result}${str[index]}`;
    if (index === 0) {
      return result;
    }
    return result += reverse(str.substr(0, index));
  };
  export default reverse;
  // END