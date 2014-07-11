(function () {
    'use strict';

    var Person,
        person1,
        person2,
        person3;

    Person = function (first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    };

    Person.prototype.isDead = function () {
        return (this.age && (this.age < 115) && (this.age > 0)) ? false : true;
    };

    person1 = new Person('kristoffer', 'hebert', 27);
    person2 = new Person('jill', 'Hebert');
    person3 = new Person('James', 'Hebert', 400);

    person1.isDead();
    person2.isDead();
    person3.isDead();

}());