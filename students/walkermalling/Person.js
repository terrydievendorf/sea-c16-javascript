var Person = function(name,parent,age) {
	// construct
	this.name = !!name ? name.toString().trim() : false;
	this.parent = parent;
	this.age = parseInt(age,10);

	// methods
	this.isDead = function(){
		return Number.isInteger(this.age) ? false : true;
	}
	this.isOrphan = function(){
		return !!this.parent ? false : true;
	}

	// warning
	if(this.isDead || this.isOrphan || this.age > 116 || !this.name){
		console.log('You\'ve created a monster!');
	}
 }