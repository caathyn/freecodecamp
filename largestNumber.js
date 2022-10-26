function largestOfFour(arr) {
  let result = []; // [5, ]

  for (let i = 0; i < arr.length; i++) { 
    let largestNum = -Infinity;
    const subArr = arr[i];

    for (let j = 0; j < arr[i].length; j++) { 
      largestNum = Math.max(subArr[j], largestNum);
    }

    result.push(largestNum);
  }
  
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 2000]]));

