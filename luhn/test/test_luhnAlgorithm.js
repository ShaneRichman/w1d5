var assert = require("chai").assert;
var luhn = require("../lib/luhnAlgorithm");

describe("luhn luhnAlgorithm", function() {
  it("should return true if a number is checkable string", function() {
    var number = "79927398713";
    assert.isTrue(luhn.check(number));
  });

  it("should return false if a number is uncheckable string", function() {
    var number = "79927398710";
    assert.isFalse(luhn.check(number));
  });

  it("should return true if a number is a checkable number", function() {
    var number = 79927398713;
    assert.isTrue(luhn.check(number));
  });

  it("should return false if a number is uncheckable number", function() {
    var number = 79927398710;
    assert.isFalse(luhn.check(number));
  });

});