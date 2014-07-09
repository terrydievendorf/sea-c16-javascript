
var preferredName = function(FirstName, LastName) {
	if (FirstName && LastName) {
		return false
	}
	else if (FirstName && !LastName) {
		return FirstName
	}
	else if (LastName && !FirstName) {
		return LastName
	}

	else { return false};

	}
var FirstName,
    LastName;

console.log(preferredName(FirstName, LastName));

Fname = preferredName("Brent", LastName);
console.log(Fname);

Lname = preferredName(FirstName, "Parrish");
console.log(Lname);

console.log(preferredName(FirstName, LastName));

