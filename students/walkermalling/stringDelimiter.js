var stringDelimiter = function(string, delimiter){
	// construct
	var string = typeof string === "string" ? string : false;
	var delimiter = delimiter || ' ';

	// validate
	if( !string ) throw new UserException("NoStringToDelimit");

	// delimit
	var delimit = [-1];

	for(var k = 0; k < string.length; k++){
		if( string[k] === delimiter ) delimit.push(k); // grab position of delimiters
	}

	for(var q = 0; q < delimit.length; q++){
		delimit[q] = string.slice( delimit[q] + 1, delimit[q+1] ); // slice given string
	}

	return delimit;
}