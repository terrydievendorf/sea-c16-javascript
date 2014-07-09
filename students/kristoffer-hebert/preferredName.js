(function () {
    'use strict';

    var Person,
        person1,
        person2,
        person3;

    Person = function (first, last) {
        var self = this;

        self.first = first;
        self.last = last;
        self.isValidUsername = function () {

            if ((self.first && self.last) || self.first) {
                if (self.last) {
                    console.log('Welcome ' + self.first + ' ' + last);
                } else {
                    console.log('Welcome ' + self.first + ' Please provide a last name');
                }
                return true;
            }
            console.log('Invalid preferred name');
            return false;
        };
    };

    person1 = new Person(null, 'Hebert');
    person2 = new Person('Kristoffer', 'Hebert');
    person3 = new Person('Kristoffer', null);

    person1.isValidUsername();
    person2.isValidUsername();
    person3.isValidUsername();

}());