// this function implements XOR
function preferredName(firstName, lastName){
	
	if ( !!firstName != !!lastName){
		// notice, both: T,T  neither: F,F  just1st: T,F  just2nd: F,T
		// SO, we have one or the other, but not both or neither :)
		return firstName + lastName
	}
	else return false;
}
