function preferredName(arg1, arg2) {
    if(!!arg1 == !!arg2) {
        return false;
    } else {
        return arg1 || arg2;
    }
}