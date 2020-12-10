// @ts-check
// BEGIN (write your solution here)
export default (str) => {
    const arrOfStr = str.split('');
    const result = arrOfStr.map((symbol, index, arr) => { if (symbol === '|') { return ''; } return (arr[index - 1] === '|' ? 1 : 0); });
    return result.join('');
  };
  // END