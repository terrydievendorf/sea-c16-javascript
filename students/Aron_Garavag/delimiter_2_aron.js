function stringDelimiter(sampleInput, delimiter) {
  var leadStr = '';
  var delmtArr = [];
  for (var i = 0; i < sampleInput.length; i++) {
    var leadDel = sampleInput[i];
    if (leadDel === delimiter) {
      createArr(leadStr, delmtArr);
      leadStr = '';
    } else {
      leadStr += leadDel;
    }
  }
  createArr(leadStr, delmtArr);
  return delmtArr;
};

function createArr(letters, sections) {
  if(letters.length > 0) {
    sections.push(letters);
  }
};