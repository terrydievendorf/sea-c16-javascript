var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  // in case of accidental '#' entry
  age = parseInt(age, 10);
  // prevents this.age assignment if age is not a number. Unfortunately,
  // isDead or isLive methods can work without age being defined.
  // In a real world situation, the user will never get to the isDead or isLive
  // methods since it wouldn't pass this js test
  return isNaN(age) ? console.log('no age is entered or is not a number') : this.age = age;

};

//method to see if the person is dead
//assuming 114 is the oldest age possible and 0 is unborn
Person.prototype.isDead = function() {
   if (this.age > 114 || this.age <= 0) {
      return true;
    } else {
      return false;
    }};

//same assumptions as above
Person.prototype.isLive = function() {
   if (0 < this.age < 115) {
      return true;
    } else {
      return false;
    }};