 var name = 'james';
var parent = 'Julie';
var age = 15;
var Person = function(name, parent, age) {
    this.name = name;
    this.parent = parent;
    this.age = age;
  };
console.log(this.name, this.parent, this.age);