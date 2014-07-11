var firstName, lastName;

function prefferedName(firstName, lastName){
  if(firstName && lastName){
    return false
  };
  if(firstName && !lastName){
    return firstName
  };
  if(lastName && !firstName)
    return lastName
};

