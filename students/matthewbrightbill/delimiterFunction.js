function stringDelimiter (inputString, separator) {
  var condStr = '', outputArray = [];

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === separator) {
      if (condStr !== '') {
        outputArray.push(condStr);
        condStr = '';
      }
    } else if (i === inputString.length - 1) {
        if (condStr !== '') {
          condStr = condStr + inputString[i];
          outputArray.push(condStr);
      }
    } else {
        if (!!inputString[i]) {
          condStr = condStr + inputString[i];
        }
    }
  }
  return outputArray;
}
