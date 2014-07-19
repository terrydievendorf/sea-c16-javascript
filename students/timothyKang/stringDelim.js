var stringArray = new Array;
var beginArray = 0;

var stringDelimiter = function (sampleInput, separator) {
	for (var i = 0; i < sampleInput.length; i++) {
    	if (sampleInput.charAt(i) == separator) {
            myString = sampleInput.substring(beginArray,i);
            if (myString !== '') {
                stringArray.push(myString);
            }
            beginArray = i + 1;
        }
    }
    console.log(stringArray);
}
var sampleInput = 'asdf$lskd1234$asdo$$$';
stringDelimiter(sampleInput, '$');

