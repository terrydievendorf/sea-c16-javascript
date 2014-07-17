function makeList(str, delimiter) {
var array = [];
  //define the delimiter to match
var found = RegExp(delimiter, 'g');
  // number of times the delimiter is found
var occurance = (str.match(found)).length;
for (var i = 0; i < occurance; i++) {
  var foundIndex = str.match(delimiter);
  var chunk = str.slice(0, foundIndex.index);
  // slice str at +1 to skip over the delimiter
  str = str.slice(foundIndex.index+1);
  array.push(chunk);
}
//adds the last chunk if not empty  
if (str !== '') {array.push(str);}
return array;
}