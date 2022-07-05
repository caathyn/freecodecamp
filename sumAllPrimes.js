function isPrime(number) {
  for(let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if(isPrime(i))
      total += i;
  }
  return total;
}

console.log(sumPrimes(10));
