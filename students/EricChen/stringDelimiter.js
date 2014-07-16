function stringDelimiter(strIn, charIn) {
  var resultArray = [];
  var strTemp = "";

  for(var i = 0; i < strIn.length; i++ ){
    if(strIn[i] == charIn) {
      if(strTemp == ""){
       continue; 
      } else {
        resultArray.push(strTemp);
        strTemp = "";   
      }
    } else {
      strTemp += strIn[i];
    }
  }
  return resultArray;
}
