var stringDelimiter = function(string, seperator) {
    var oldStringArray = string.split(seperator);
    var newStringArray = [];
    
    for (var i = 0; i < oldStringArray.length; i++) {
        if (oldStringArray[i]) {
            newStringArray.push(oldStringArray[i]);
        }
    }
    return newStringArray;
}