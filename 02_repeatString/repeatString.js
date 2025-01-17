const repeatString = function (str, num) {
  let b = str;
  if(num>0){
  for (let i =1; i <num; i++) {
    
    b = str.concat(b);
  }
  return b;  }
  else if(num<0){
    return 'ERROR'
  }
  else{
    return "";
  }
};

// Do not edit below this line
module.exports = repeatString;
