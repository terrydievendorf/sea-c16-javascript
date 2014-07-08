var FirstName,
	LastName;

function preferredName(FirstName, LastName){
	if ( FirstName && LastName ){
		return false;
	}else if (LastName){
		return LastName;
	}else if (FirstName){
		return FirstName;
	}else{
		return false;
	}
}