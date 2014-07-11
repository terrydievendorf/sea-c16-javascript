//Work in progress.
var seperator = function(input,filter) {
	input = [];
	for (var i = 0; i <= input.length; i++) {
		if (filter == input[i]) {
			input.splice(0,filter,['']);
			console.log(input);
		} else {
			return true
		}
	}
};

seperator('asdf$lskd1234$asdo$$$','$');