var Person = function(name, parentName, optionalAge) {
  this.name = name;
  this.parentName = parentName;
  this.age = optionalAge;
  
  this.deceased = function() {
    if (this.age < 0 || this.age > 120) {
      return true;
    } 
    else {
      return false; 
    } 
  };
}; 