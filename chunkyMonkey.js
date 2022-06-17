const chunkArrayInGroups = (arr, size) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i+= size) {
    newArray.push(arr.slice(i, i + size))
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
