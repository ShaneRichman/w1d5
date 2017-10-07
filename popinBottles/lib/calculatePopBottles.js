var args = process.argv.slice(2);

function popBottles(money) {
  var fullBottles = money/2;
  var totalBottles = fullBottles;
  var emptyBottles = 0;
  var caps = 0;
  var report = {
    "TOTAL BOTTLES": fullBottles,
    "REMAINING BOTTLES": 0,
    "REMAINING CAPS": 0,
    "TOTAL EARNED": {
      BOTTLES: 0,
      CAPS: 0
    }
  };
  while(fullBottles > 0) {
    caps ++;
    emptyBottles++;
    fullBottles--;
    report["REMAINING BOTTLES"]++;
    report["REMAINING CAPS"]++;
    if (caps >= 4) {
      fullBottles++;
      totalBottles++;
      caps -= 4;
      report["TOTAL EARNED"].CAPS++;
      report["TOTAL BOTTLES"]++;
      report["REMAINING CAPS"] -= 4;
    }
    if (emptyBottles >= 2) {
      fullBottles++;
      totalBottles++;
      emptyBottles -= 2;
      report["TOTAL EARNED"].BOTTLES++;
      report["TOTAL BOTTLES"]++;
      report["REMAINING BOTTLES"] -= 2;
    }
  }
  return report;
}
console.log(popBottles(args[0]));