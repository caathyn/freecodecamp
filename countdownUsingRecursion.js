// Only change code below this line
function countdown(n){ // n = 5
  if (n < 1) { // 5 > 0
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
// Only change code above this line

console.log(countdown(5));

