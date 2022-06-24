function destroyer(arr) {
  const argsArray = Array.from(arguments).slice(1);

  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < argsArray.length; j++) {
      if(arr[i] === argsArray[j]) {
        delete arr[i]
      }

    }
  }

  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));