/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const clearString = function(str) {
    return str.replace(/\s/g, "").toLowerCase();
  }

  const sortedString = function(str) {
    return clearString(str).split("").sort().join("");
  }

  return sortedString(str1) === sortedString(str2);
}

module.exports = isAnagram;
