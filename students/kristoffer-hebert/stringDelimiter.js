(function () {
    'use strict';

    function stringDelimiter(string, seperator) {
        var index, array = [];
        if (string && seperator) {
            while (string) {
                index = string.indexOf(seperator);
                if (index === -1) {
                    index = string.length;
                }
                array.push(string.substring(0, index));
                string = string.substring(index + seperator.length);
            }
        } else {
            array.push(string);
        }
        return array;
    }

}());