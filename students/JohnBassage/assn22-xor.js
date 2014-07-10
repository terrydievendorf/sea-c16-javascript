function preferredName (Firstname, Lastname) {
    if (Firstname && !Lastname) {
        return Firstname;
    }
    else if (!Firstname && Lastname) {
        return Lastname;
    }
    else {
        return false;
    }
}