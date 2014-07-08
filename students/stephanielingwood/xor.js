var preferredName = function (FirstName,LastName) {
    if (FirstName && !LastName) {
        console.log(FirstName);
        return FirstName
    }
    else if (!FirstName && LastName) {
        console.log(LastName);
        return LastName
    }
    else if (FirstName && LastName) {
        console.log("false");
        return false;
    }
    else {
    }
}

preferredName("Steph","Lingwood");