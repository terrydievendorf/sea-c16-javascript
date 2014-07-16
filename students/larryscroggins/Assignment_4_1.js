var sampleInput;
var stringSeparator;
var array = [];

stringDelimiter = function(sampleInput, stringSeparator) {
  var match;
  for (i = 0; i <= sampleInput.length; i++) {
    if (sampleInput.charAt(i) === stringSeparator) {
      var static = i;
      var arrElement = sampleInput.substring(match, i);
      if (arrElement !== "") {
        array.push(arrElement);
      }
      match = static+1;
    }
  }
  return array;
}