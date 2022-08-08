function squareSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Math.pow(num[i], 2);
  }

  return sum;
}

console.log(squareSum([1, 2, 2]))
