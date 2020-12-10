// BEGIN (write your solution here)
const lengthOfLastWord = (str) => {
    const allWords = str.split(' ');
    let lastWord = '';
    for (const word of allWords) {
      if (word.length > 0) {
        lastWord = word;
      }
    }
    return lastWord.length;
  };
  export default lengthOfLastWord;
  // END