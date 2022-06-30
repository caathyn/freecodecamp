function convertHTML(str) {
  const char = [/&/g, /</g, />/g, /"/g, /'/g]
  const entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"]

  for (let i = 0; i < char.length; i++) {
    str = str.replace(char[i], entities[i])
  }
  return str;
}



console.log(convertHTML("Dolce & Gabbana"));
