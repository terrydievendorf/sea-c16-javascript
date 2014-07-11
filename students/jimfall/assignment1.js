var preferredName = function(FirstName, LastName) {

	if ((!FirstName && !LastName) || (FirstName && LastName)) {
		return false;
	} else if (FirstName && !LastName) {
		return FirstName;
	} else if (!FirstName && LastName) {
		return LastName;
	}
}
