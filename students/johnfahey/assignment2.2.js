var FirstName,
	LastName;

function preferredName(FirstName, LastName){
	if ( FirstName && LastName || !FirstName && !LastName ){
		return false;
	}
	else if(LastName || FirstName){
		return LastName || FirstName;
	}
}