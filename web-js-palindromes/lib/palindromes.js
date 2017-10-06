function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").replace(/ /g, "");
  return s.replace(/ /g, "") == stringReverse;
}

module.exports = isPalindrome;
