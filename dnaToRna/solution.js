// BEGIN (write your solution here)
const dnaToRna = (dna) => {
    let result = '';
    for (let index = 0; index < dna.length; index += 1) {
      if (dna[index] === 'G') {
        result = `${result}C`;
      } else if (dna[index] === 'C') {
        result = `${result}G`;
      } else if (dna[index] === 'T') {
        result = `${result}A`;
      } else if (dna[index] === 'A') {
        result = `${result}U`;
      } else if (dna[index] === '') {
        result = '';
      } else return null;
    } return result;
  };
  export default dnaToRna;
  // END