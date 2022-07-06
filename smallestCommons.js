function findLCM(arr1, arr2) {
  const max = Math.max(arr1, arr2);
  const min = Math.min(arr1, arr2);

  let i = max;
  while(i % min !== 0) {
    i += max;
  }
  return i;
}

console.log(findLCM(1, 5))

function smallestCommonMultiple(arr) {
  const lowNum = Math.min(...arr);
  const highNum = Math.max(...arr);
  let smallestCommon = findLCM(...arr);
  for (let i = lowNum; i <= highNum; i++) {
    if(smallestCommon % i !== 0) {
      smallestCommon = findLCM(smallestCommon, i);
    }
  }
  return smallestCommon;
}

console.log(smallestCommonMultiple([1, 5]))
