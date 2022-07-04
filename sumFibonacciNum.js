function sumFibs(num) {
  let previousNum = 0;
  let nextNum = 1;
  let sum = 0;

  while (num >= nextNum) {
    let tempNum = nextNum;
    nextNum += previousNum;
    previousNum = tempNum;
    if (previousNum % 2 !== 0) {
      sum += previousNum
    }
  }
  return sum;
}

console.log(sumFibs(4));
