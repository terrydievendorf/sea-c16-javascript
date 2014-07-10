// The ?: is called a conditional(Ternary) Operator in Javascript.
// It can be used as a shortcut for an if else statement.
function preferredName (firstName, lastName) {
    return (!firstName == !lastName) ? false : (firstName || lastName);
};

console.log("If first name and last name are given return : " + 
preferredName("Joaquin", "Guardado"));

console.log("If a first name or a last name is given then return first name: " + 
preferredName("Joaquin", ""));

console.log("If a first name or a last name is given then return last name: " + 
preferredName("", "Guardado"));

console.log("If there are no names given then return: " + preferredName("",""));