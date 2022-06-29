function pairElement(str) {
  const pairArray = [];
  str = str.split('')

  for(let i = 0; i < str.length; i++) {
    if(str[i] === "C") {
      pairArray.push(["C", "G"])
    } else if (str[i] === "G") {
      pairArray.push(["G", "C"])
    } else if(str[i] === "T") {
      pairArray.push(["T", "A"])
    } else if (str[i] === "A") {
      pairArray.push(["A", "T"])
    }
  }
  return pairArray;
}

console.log(pairElement("ATCGA"));
