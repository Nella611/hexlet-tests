// @ts-check
// BEGIN (write your solution here)
const isEven = (num) => num % 2 === 0;
const sameParityFilter = (arr) => {
  const firtNumIsEven = isEven(arr[0]);
  return arr.filter((num) => isEven(num) === firtNumIsEven);
};
export default sameParityFilter;
// END