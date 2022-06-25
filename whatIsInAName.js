function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source) 
  return collection.filter(charObj => {
      for (let i = 0; i < sourceKeys.length; i++) {
        const key = sourceKeys[i];

        if (charObj[key] !== source[key]) {
          return false;
        }
      }
      return true;
    });
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) 