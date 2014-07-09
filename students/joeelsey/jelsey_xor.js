var FirstName, LastName;


var preferredName = function(FirstName,LastName) {
  if (FirstName && LastName) || (!FirstName && !LastName){
  return false;
} else {
  return FirstName || LastName;
}