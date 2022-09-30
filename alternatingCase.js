String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((item) => {
      if (item.toUpperCase() === item) {
        return item.toLowerCase()
      } else {
        return item.toUpperCase()
      }
  }).join('')
}

console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());