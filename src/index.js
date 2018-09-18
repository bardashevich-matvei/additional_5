module.exports = function check(str, bracketsConfig) {
  const sk=[];
  sk.push(0);
  sk.push(0);
  sk.push(0);
  sk.push(0);
  sk.push(0);
  for (i in str){
    for (j in bracketsConfig){
      for (k in bracketsConfig[j]){
        if (str[i]===bracketsConfig[j][k] && k%2===0) sk[j]++;
        else if (str[i]===bracketsConfig[j][k]) sk[j]--;
        if (sk[j]<0) return false;
      }
    }
  }
  for (ii in sk) if (sk[ii]!=0) return false;
  return true;
}
