var input = 'asdf$lskd1234$asdo$$$';
stringDelimiter = function(input, chopPoint) {
	var array = [];
	var outputStr = ""; 
	for(i = 0; i <= input.length; i++) {
		if (input[i] === "$") {
			if (outputStr !== "") {
				array.push(outputStr);
				outputStr = "";
			}
		}
		else {
			outputStr += input[i];
		}
	}
	console.log(array);
}

stringDelimiter(input, "$");
// -> ['asdf', 'lskd1234', 'asdo']
