function strCount(str, letter){  
  let count = 0; 
  let split = str.split("");
  
  split.filter(item => {
    if (item === letter) {
      count++;
    }
  })
  
  return count;
}
