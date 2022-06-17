function mutation(arr) {
  let secondElem = arr[1].toLowerCase();
  let firstElem = arr[0].toLowerCase();
  for (let i = 0; i < secondElem.length; i++) {
    if(firstElem.indexOf(secondElem[i]) < 0) {
      return false;
    }
  }
    return true;
}

console.log(mutation(["hello", "hey"]));
