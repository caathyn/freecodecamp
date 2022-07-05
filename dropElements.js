function dropElements(arr, func) {
  let emptyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i)
    }
  }
  return emptyArray;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));