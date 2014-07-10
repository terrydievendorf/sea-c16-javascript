var Person = function(fname, parentname, age) {
	this.fname = fname;
	this.parentname = parentname;
	this.age = age;
	if (typeof fname === 'undefined') {
        throw new TypeError("'fname' is required!");
    }
    if (typeof parentname === 'undefined') {
        throw new TypeError("'parentname' is required!");
    }
	this.isDead = function() {
		if(this.age >= 115 && this.age < -1 ) {
			return true;
		} else {
			return false;
		}
	}
}