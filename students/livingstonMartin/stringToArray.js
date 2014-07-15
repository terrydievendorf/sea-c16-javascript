stringDelimiter = function(input, chopPoint) {
	var array = [];
	var outputStr = ""; 
	for(i = 0; i <= input.length; i++) {
		if (input[i] === chopPoint) {
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

//stringDelimiter('asdf$lskd1234$asdo$$$', "$");