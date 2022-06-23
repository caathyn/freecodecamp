function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function (a, b) {
    if(a < b) {
      return -1
    }
  });

  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));