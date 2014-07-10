function Person (name, parentName, optionalAge) {
	this.name = name;
	this.parentName = parentName;
	this.optionalAge = age;
	this.isDead = function () {
		if (0 >= this.age >= 120) {
			console.log(this.name + " is NOT alive");
			return true;
		}
		else {
			console.log(this.name + " is alive")
			return false;
		}
	};
};