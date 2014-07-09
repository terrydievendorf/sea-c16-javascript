function preferredName (FirstName, LastName) {
    if (!!(FirstName && LastName)) {
      return false;
    }
    else {
      return (FirstName || LastName);
    }
}

