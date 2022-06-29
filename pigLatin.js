function isVowel(char) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
   }
   return !!vowels[char.toLowerCase()]
}

function translatePigLatin(word) {
  let consonants = '';
  if(isVowel(word[0])) {
    return word + "way";
  } else {
    while(word && isVowel(word[0]) === false) {
      consonants += word.slice(0,1);
      word = word.slice(1);
    }
    word += consonants + "ay"
  }
  return word;
}

console.log(translatePigLatin("consonant"));
