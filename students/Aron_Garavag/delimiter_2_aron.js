function stringDelimiter(sampleInput, delimiter) {
  var leadStr = '',
      delmtArr = [];
  for (i = 0; i < sampleInput.length; i++) {
    if( i !== sampleInput.length && sampleInput[i] !== delimiter) {
      leadStr += sampleInput[i];
    } else {
      if (leadStr) delmtArr.push(leadStr);
        leadStr = '';
    }
  }
    return delmtArr;
};