function preferredName (FirstName, LastName) {
	if (!FirstName && !LastName) {
		console.log(false);
	} else if (FirstName && !LastName) {
		console.log(FirstName);
	} else if (FirstName && LastName) {
		console.log(false);
	} else if (!FirstName && LastName){
		console.log(LastName);
	}
}
