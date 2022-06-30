function uniteUnique(arr) {
  const arg = [...arguments];
  const newArray = [];

  for (let i = 0; i < arg.length; i++) {
    for (let j = 0; j < arg[i].length; j++) {
      if (!newArray.includes(arg[i][j])) {
        newArray.push(arg[i][j])
      }
    }

  }
  return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
