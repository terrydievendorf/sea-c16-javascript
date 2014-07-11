var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  this.age = age;
  
};

Person.prototype.isDead = function() {
   if (this.age > 114 || this.age <= 0) {
      return true;
    } else {
      return false;
    }};

Person.prototype.isAlive = function() {
   if (0 < this.age < 115) {
      return true;
    } else {
      return false;
    }};
