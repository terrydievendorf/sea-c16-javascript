function testPreferredName (){
	preferredName("Adam");
	console.log("Expected: Adam");
	
	preferredName(undefined, "Smith");
	console.log("Expected: Smith");
	
	preferredName(undefined, undefined);
	console.log("Expected: false");
	
	preferredName("Will", "Smith");
	console.log("Expected: false");
};
