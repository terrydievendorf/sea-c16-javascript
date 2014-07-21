function stringDelimiter (inputString, seperator) {
  var condStr = '', outputArray = [];

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === seperator) {
      if (condStr !== '') {
        outputArray.push(condStr);
        condStr = '';
      }
    } else {
      condStr = condStr + inputString[i];
    }
  }
  return outputArray;
}
