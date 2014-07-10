

function preferredName (FirstName, LastName) {
  return ((FirstName && LastName) || !(FirstName || LastName)) ? false : (FirstName || LastName);
};



