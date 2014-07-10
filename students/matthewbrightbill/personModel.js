var Person = function(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function() {
		if (this.age > 114 || !this.age) {
			console.log(this.age > 114 || !this.age);
		}
		else {
			console.log(!this.age);
		}
	};
	this.isAlive = function() {
		if (this.age < 114 && !!this.age) {
			console.log(true);
		}
		else {
			console.log(false);
		}
	};
};
