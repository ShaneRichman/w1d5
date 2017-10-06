// takes a list => number or -1
function maxProfit(list) {
  var profits = 0;
  if (list.length < 1) {
    return -1;
  }
  var min = list[0];
  var max;
  for (var i = 1; i < list.length; i++) {
    if ((list[i] - min) > profits) {
      profits = (list[i] - min);
      max = list[i];
    } else if (list[i] < min){
      min = list[i];
    } else {
      continue;
    }
  }
  if (profits <= 0){
    return -1;
  }
  return profits;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));