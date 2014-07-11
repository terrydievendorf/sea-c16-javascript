function Person(name, age, parent) {
    this.name = name;
    this.age = age;
    this.parent = parent;
    
    this.sayHi = function() {
        return "Hi I am " + this.name + " " + this.age;
    };
    
    this.isAlive = function() {
        if(this.age < 123) {
            return true;
        } else {
            return isDead();
        }
    };

    this.isDead = function() {
        if(this.age > 123 || this.age < 0) {
            return true;
        }
    };
}
//test cases
var person1 = new Person("Bob", 45, "Brother Bear");
var person2 = new Person("Bugs", 122);
var person3 = new Person("Scarface", 124);

 
console.log(person1.sayHi() + " " + person1.isAlive());
console.log(person2.sayHi() + " " + person2.isAlive());
console.log(person3.sayHi() + " " + person3.isDead());