var Person = function(name) {
  this.name = name;
  this.parentName = parentName;
  this.age = age;
  this.isDead = function () {
    if(!age) {
      return false;
    }
  }
}