function check(numCheck) {
  var numString = String(numCheck);
  var sum = 0;
  var nDigits = numString.length; // 11
  var parity = nDigits % 2; // 1
  for (var i = 0; i < nDigits; i++) {
    var digit = Number(numString[i]);
    if (i % 2 == parity) {
      digit *=  2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    sum += digit;
  }
  return ((sum % 10) === 0);
}


module.exports = {
  check: check
};

