function preferredName (firstName, lastName) {
    return (!firstName == !lastName) ? false : (firstName || lastName);
};
//if a first name and a last name are given, return false
//if a first name OR last name is given, return that name
//if no names are given, return false

//fiddle with test cases logged to console: http://jsfiddle.net/pBQ5p/
