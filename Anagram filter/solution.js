// BEGIN (write your solution here)
const isAnagram = (str, anagram) => {
    if (str.length !== anagram.length) {
      return false;
    }
    const arrOfAnagram = anagram.split('');
    const arrOfStr = str.split('');
    const overlap = arrOfStr.filter((word) => { if (arrOfAnagram.includes(word)) {  delete arrOfAnagram[arrOfAnagram.indexOf(word)]; return word; } });
    if (overlap.length == anagram.length) {
      return true;
    }
    return false;
  };
  const filterAnagrams = (anagrama, arr) => arr.filter((word) => {if(isAnagram(word, anagrama)) {return word}});
  export default filterAnagrams;
  // END