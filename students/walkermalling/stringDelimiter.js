var stringDelimiter = function(string, delimiter){
	// construct
	this.string = typeof string === "string" ? string : false;
	this.delimiter = delimiter || ' ';

	// validate
	if( !this.string ){
		throw new UserException("NoStringToDelimit");
	}

	// delimit
	var delimit = [-1];
	
	for(var k = 0; k < this.string.length; k++){
		if( this.string[k] === this.delimiter ) delimit.push(k); // grab position of delimiters
	}

	for(var q = 0; q < delimit.length; q++){
		delimit[q] = this.string.slice( delimit[q] + 1, delimit[q+1] ); // slice given string
	}

	return delimit;
}