const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };

  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFirstName = function(first) {
    return firstAndLast = first + " " + this.getLastName()
  };

  this.setLastName = function(last) {
    return firstAndLast = this.getFirstName() + " " + last
  };

  this.setFullName = function(name) {
    return firstAndLast = name
  };
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());


