function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum) {
  return [startNum];
  }
  const myArray = rangeOfNumbers(startNum, endNum - 1);
  myArray.push(endNum);
  return myArray;
};
