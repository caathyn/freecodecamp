function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function() {
    console.log("chomp chomp");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


