// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const uniqueArray = (array) => {
    const result = [];
    for (const part of array) {
      if (!result.includes(part)) {
        result.push(part);
      }
    }
    return result;
  };
  
  const getLongestLength = (str) => {
    const arrOfArs = str.split('');
    if (str.length === 0) {
      return 0;
    }
    const counter = str.length;
    const uniq = (counter) => {
      let find = 0;
      let result = 0;
      for (let firtIndex = 0; firtIndex + counter <= str.length; firtIndex += 1) {
        const a = arrOfArs.slice(firtIndex, (firtIndex + counter));
        const b = uniqueArray(a);
        if (a.length === b.length) {
          find = 1;
          result = a.length;
          return result;
        }
        if (b.length > result) {
          result = b.length;
        }
      }
      if (find === 0) {
        return uniq(result);
      }
      return result;
    };
    return uniq(counter);
  };
  export default getLongestLength;
  // END