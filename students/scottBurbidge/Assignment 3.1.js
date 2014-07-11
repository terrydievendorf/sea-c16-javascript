var Person = function (name, parent, age, parentAge) {
  this.name = name;
  this.parent = parent;
  this.age = age;
  this.parentAge = parentAge;
  this.ageCheck = function (age, parentAge) {
    if (!this.age) {
      console.log('You outside of time and space or something?');
    } else {
      if (this.age > 100) {
        console.log('Is that possible');
      } else if (this.age >= this.parentAge) {
        console.log("I'm not sure how that could happen, it must be complicated though");
      } else if (this.age <= 100) {
        console.log('That\'s a good age');
      }
    }
  };
};