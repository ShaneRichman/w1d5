function sum(x, y) {
  return x + y;
}

function makeSumString(x, y) {
  console.log("Here is your Sum: " + sum(x, y));
}

module.exports = {
  makeSumString: makeSumString
};