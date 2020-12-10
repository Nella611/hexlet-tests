// BEGIN (write your solution here)
const invertCase = (word) => {
    let result = '';
    for (let index = 0; index < word.length; index += 1) {
      if (word[index] === word[index].toUpperCase()) {
        result = `${result}${word[index].toLowerCase()}`;
      } else result = `${result}${word[index].toUpperCase()}`;
    } return result;
  };
  export default invertCase;
  // END