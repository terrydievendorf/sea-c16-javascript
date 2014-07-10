var Person = function(fname, parentname, age) {
	this.fname = fname;
	this.parentname = parentname;
	this.age = age;
	this.isDead = function() {
		if(this.age >= 115 && this.age < -1 ) {
			return true;
		} else {
			return false;
		}
	}
}