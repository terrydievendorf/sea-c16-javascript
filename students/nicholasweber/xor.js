var preferredName = function(firstName, lastName) {
  if (typeof firstName != "string" || typeof lastName != "string") {
    return console.log("Uh, something's wrong, both inputs should be strings (even if blank).");
  }

  else if ((!firstName && !lastName)) || (!!firstName && !!lastName)) {
      return false;
  }
  
  else if (!!firstName) {
    return firstName;
  }

  else {
    return lastName;
  }

}