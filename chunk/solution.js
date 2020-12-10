// BEGIN (write your solution here)
const chunk = (arr, num) => {
    const lumpArr = [];
    let chunkOfArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      chunkOfArr.push(arr[i]);
      if (chunkOfArr.length === num) {
        lumpArr.push(chunkOfArr);
        chunkOfArr = [];
      }
    }
    if (chunkOfArr.length > 0) {
      lumpArr.push(chunkOfArr);
    }
    return lumpArr;
  };
  export default chunk;
  // END