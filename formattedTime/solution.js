// BEGIN (write your solution here)
const formattedTime = (num) => {
    const howHours = () => {
      let hours;
      if (num < 60) {
        hours = '00';
      } else if (num >= 1440) {
        hours = String(Math.floor((num % 1440) / 60));
      } else {
        hours = String(Math.floor(num / 60));
      } return hours;
    };
    const howMinuts = () => {
      let minuts;
      if (num < 60) {
        minuts = String(num);
      } else minuts = String(num % 60);
      return minuts;
    };
    const h = () => {
      let a = howHours(num);
      if (a.length < 2) {
        a = `0${a}`;
      } return a;
    };
    const m = () => {
      let b = howMinuts(num);
      if (b.length < 2) {
        b = `0${b}`;
      } return b;
    };
    const result = `${h()}:${m()}`;
    return result;
  };
  
  export default formattedTime;