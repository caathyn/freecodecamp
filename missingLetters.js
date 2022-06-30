function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  const startPoint = alphabet.indexOf(str[0])

  for (let i = startPoint; i < startPoint + str.length; i++) { 
    if (alphabet[i] !== str[i - startPoint]) { 
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("lmnp"));
