function binaryAgent(str) {
  let binaryString = str.split(" ");
  let result = [];
  for (let i = 0; i < binaryString.length; i++) {
    result.push(String.fromCharCode(parseInt(binaryString[i], 2)));

  }
  return result.join("");
}

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
