// This instantiates the person object
var Person = function( name, parentName, age) {
	console.log ("Person made with name " name ", age " age);
	this.name = name;
	this.parentName = name;
	this.age = age;
};

// Returns a person is dead if age is not defined, 0 or above 115.
var isDead = function(Person) {
	console.log ("isDead called" );
	return (!!Person.age) || (Person.age == 0) || (Person.age > 115) ? true: false;
};
