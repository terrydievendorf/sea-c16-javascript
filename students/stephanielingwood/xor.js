var preferredName = function (FirstName,LastName) {
    if (FirstName && !LastName) {
        return FirstName
    }
    else if (!FirstName && LastName) {
        return LastName
    }
    else if (FirstName && LastName) {
        return false;
    }
    else {
    }
}

preferredName("Steph","Lingwood");