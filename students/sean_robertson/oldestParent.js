var People = function(array) {
    this.people = array;
}

People.prototype = {
    
    oldestPerson: function () {
        var living = _.filter(this.people, 'age');
        return _.last(_.sortBy(living, 'age')).name;
    },
    
    livingPeople: function () {
        return _.filter(this.people, 'age');
    },
    
    oldestAge: function () {}
    
};

var people = [
    {
        name: 'Hank',
        age: 29,
        parent: 'Don'
    },
    {
        name: 'Deborah',
        age: 30,
        parent: 'Don'
    },
    {
        name: 'Danny',
        age: 24,
        parent: 'Don'
    },
    {
        name: 'Don',
        age: 64,
        parent: 'Haskell'
    },
    {
        name: 'Kathy',
        age: 75,
        parent: 'Lenora'
    },
    {
        name: 'Haskell',
        parent: 'Finus'
    },
    {
        name: 'Finus'
    }
]

group = new People(people);

console.log(group.oldestPerson());
console.log(group.livingPeople());


