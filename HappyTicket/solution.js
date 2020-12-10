// BEGIN (write your solution here)
const isHappyTicket = (str) => {
    const sum1 = str.substr(0, str.length / 2);
    const sum2 = str.substr(str.length / 2, str.length - 1);
    let result1 = 0;
    let result2 = 0;
    for (let i1 = 0; i1 < sum1.length; i1 += 1) {
      result1 += parseInt(sum1[i1]);
    }
    for (let i2 = 0; i2 < sum2.length; i2 += 1) {
      result2 += parseInt(sum2[i2]);
    }
    if (result1 === result2) {
      return true;
    } return false;
  };
  export default isHappyTicket;
  // END