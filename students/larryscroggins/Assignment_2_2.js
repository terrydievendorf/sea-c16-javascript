var FirstName, LastName;

    var preferredName = function(FirstName, LastName) {
      if(FirstName && LastName) {
        console.log(false);
        return false;
      }
      else if(!FirstName && LastName) {
        console.log(LastName);
        return LastName;
      }
      else if(FirstName && !LastName) {
        console.log(FirstName);
        return FirstName;
      }
      else if("" && LastName) {
        console.log(LastName);
        return LastName;
      }
    }

  preferredName("Larry", "Scroggins");