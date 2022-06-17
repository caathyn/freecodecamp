function getIndexToIns(arr, num) {
  let count = 0;
  let array = arr.sort(function(a, b) { return a - b });
  for(let i = 0; i < array.length; i++) {
    if (num > array[i]) {
      count++;
    }
  }
  return count;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
