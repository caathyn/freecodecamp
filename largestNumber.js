function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largeNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largeNum) {
        largeNum = arr[i][j]
      }
    }
    result[i] = largeNum;
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
