const sumAll = function (num, end) {
  var ini;
    var mul;
    let i;
  if (num >0&& end> 0 && Number.isInteger(num )&&Number.isInteger(end) ){
    
    if (num > end) {
      mul = num;
      ini = end;
    } else {
      ini = num;
      mul = end;
    }

    for (i = 0; i <= mul; i++) {
      ini = ini + i;
    }
    return ini - 1;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
