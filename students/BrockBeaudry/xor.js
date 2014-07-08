function preferredName(firstName, lastName) {
    return (!firstName != !lastName) ? firstName || lastName : false;
}