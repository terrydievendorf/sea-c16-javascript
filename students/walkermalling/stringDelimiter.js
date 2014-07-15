var stringDelimiter = function(string, delimiter){
	this.string = string;
	this.delimiter = delimiter || ' ';
	var arr = [];
	var currentSlice = "";
	for(var k = 0; k < this.string.length; k++){
		if(this.string[k] === this.delimiter){
			arr.push( currentSlice );
			currentSlice = "";
		} else {
			currentSlice += this.string[k];
		}
	}
	if(currentSlice !== "") arr.push(currentSlice);
	return arr;
}