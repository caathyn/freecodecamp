function repeatStringNumTimes(str, num) {
  let repeatedStr = '';
  while (num > 0) {
    repeatedStr += str;
    num--;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
