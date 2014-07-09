var preferredName = function (firstName, lastName) {
  return (!!firstName || !!lastName) ? false : "Hi " + firstName;
}
