var person = function(name,age,parentsName) {
	this.name = name;
	this.age = age;
	this.parentsName = parentsName;
	this.isDead = function () {
		if (typeof(this.age) == 'number') {
			return true;
		} else {
			return false;
		}
	}
}

var joe = new person('joe',35,'john');
