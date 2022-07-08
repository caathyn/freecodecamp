function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let letterIndex = alphabet.indexOf(str[i]);

    if (letterIndex >= 13) {
      result += alphabet[letterIndex - 13];
    } else if (letterIndex < 13 && letterIndex > -1) {
      result += alphabet[letterIndex + 13];
    } else {
      result += str[i]; 
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log('A'.charCodeAt(0))