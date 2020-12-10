// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getMirrorMatrix = (arr) => {
    const mirrorArr = arr;
    for (let index = 0; index < arr.length; index += 1) {
      for (let i = 0; i < arr[index].length / 2; i += 1) {
        mirrorArr[index][arr.length - 1 - i] = arr[index][i];
      }
    }
    return mirrorArr;
  };
  export default getMirrorMatrix;
  // END