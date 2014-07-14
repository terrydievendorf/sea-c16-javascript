var sampleInput = 'asdf$lskd1234$asdo$$$';
var stringSeparator;

stringDelimiter = function(sampleInput, stringSeparator) {
  var arr = sampleInput.split(stringSeparator);
  return arr.filter(function(e) {return e});
}

stringDelimiter(sampleInput, '$');