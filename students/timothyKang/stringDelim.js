var stringDelimiter = function (sampleInput, separator) {
	for (var i = 0; i < sampleInput.length; i++) {
		if (sampleInput.charAt(i) == separator) {
			continue;
		} 
		console.log([sampleInput.charAt(i)]);
	}
}