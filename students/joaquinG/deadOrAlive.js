function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        return "Hi I am " + this.name + " " + this.age;
    };
    
    this.isAlive = function() {
        if(this.age < 113) {
            return this.name + " is Alive";
        } else {
            return this.name + " is Dead";
        }
    };
}

var person1 = new Person("Bob", 45);
var person2 = new Person("Bugs", 113);

 
console.log(person1.sayHi() + " " + person1.isAlive());
console.log(person2.sayHi() + " " + person2.isAlive());