import { chunk } from 'lodash';

// BEGIN (write your solution here)
const toHexadecimal = (arr) => arr.map((num) => parseInt(num).toString(16).padStart(2, "0"));
export const ipToInt = (ipAddress) => {
  const arrOfIp = ipAddress.split('.');
  const result = toHexadecimal(arrOfIp).join('').padStart(10, "0x");
  return parseInt(result, 16);
};
export const intToIp = (number) => number.toString(16).padStart(8, "0").match(/.{1,2}/g).map((num) => parseInt(num, 16)).join('.');
// END