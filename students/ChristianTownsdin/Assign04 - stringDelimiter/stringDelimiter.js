

// write a function that takes string, and breaks it down into 
// an array of strings between the seperators

//var sampleInput = 'asdf$lskd1234$asdo$$$';
//stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']


var stringDelimiter = function(inputString, delim){
  
  var resultArray = [];
  // build up strings, 1 char at a time, and return them as a new "push()" to resultArray, everytime
  
  var stringChunk = "";
  for (var i = 0; i <= inputString.length; i++){
    // if not delim, add to stringChunk
    if (inputString.charAt(i) !== delim){
      stringChunk += inputString.charAt(i);
    }
    // if is delim, push() current stringChunk to the output array, and then reset stringChunk = ""
    else {
      resultArray.push(stringChunk);
      stringChunk = "";
    }
  }
  return "Results: " + resultArray;
};
