var sampleInput = 'asdf$lskd1234$asdo$$$';

function stringDelimiter(input, delimiter) {
  var output = [];
  var string = "";

  for(var i = 0; i < input.length; i++ ){
    if(input[i] === delimiter) {
      if(string === ""){
       continue; 
      } else {
        output.push(string);
        string = "";   
      }
    } else {
      string += input[i];
    }
  }
  return output;
}

stringDelimiter(sampleInput, '$');