var sampleInput = 'asdf$lskd1234$asdo$$$';
var stringSeparator;
var array = [];

stringDelimiter = function(sampleInput, stringSeparator) {
  var match;
  for (i = 0; i <= sampleInput.length; i++) {
    if (sampleInput.charAt(i) === '$') {
      var static = i;
      array.push(sampleInput.substring(match, i));
      match = static+1;
    }
  }
  array = array.filter(function(e) {return e});
}
