var Person = function (name, parentName, age) {
	this.name = name
	this.parentName = parentName
	this.age = age
	this.isDead = function (age) {
		if (!this.age) {
			console.log("Well, thats awkward, " +name + " apears to be dead....");
		} else {
          console.log(this.name + " is alive!")
        }
	}
};