var preferredName = function (firstName,lastName) {
	if (firstName || lastName) {
		return ((firstName && lastName) ? false : firstName || lastName);
	} else {
		return false;
	}
};
//if a first name and a last name are given, return false
//if a first name OR last name is given, return that name
//if no names are given, return false

//gist with interactive demo: https://gist.github.com/MJGrant/835e587a6950e77f9b89