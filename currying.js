const add = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
      }
    }
  };

  // Only change code above this line

console.log(add(10)(20)(30));