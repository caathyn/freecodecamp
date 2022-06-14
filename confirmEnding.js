function confirmEnding(str, target) {
  let result = str.substr(-target.length)
  if (result === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));
