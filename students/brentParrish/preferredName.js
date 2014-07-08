<script>



var preferredName = function(FirstName, LastName) {
	if (FirstName && LastName) {
		console.log(false)
	}
	else if (FirstName && !LastName) {
		console.log(FirstName)
	}
	else if (LastName && !FirstName) {
		console.log(LastName)
	}

	else {console.log(false)};

	}
var FirstName,
    LastName;

preferredName(FirstName, LastName)

Fname = preferredName("Brent", LastName);
Fname;

Lname = preferredName(FirstName, "Parrish");
Lname

preferredName(FirstName, LastName)

</script>