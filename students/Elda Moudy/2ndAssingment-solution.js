function Person (name, parentName, optionalAge) {
	this.name = name;
	this.parentName = parentName;
	this.optionalAge = optionalAge;
	this.isDead = function () {
		if (0 >= this.optionalAge || this.optionalAge >= 120) {
			console.log(this.name + " is NOT alive");
			return true;
		}
		else {
			console.log(this.name + " is alive")
			return false;
		}
	};
};