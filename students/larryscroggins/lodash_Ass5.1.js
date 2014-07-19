var _ = require('lodash');

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
];

function oldestAge(people) {
  return _.max(people, 'age').age;
}

function living(people) {
 var ages = _.filter(people, function(persons) {return persons.age >= 0});
 return _.pluck(ages, 'name');
}

function oldestLivingPerson(people) {
  return _.max(people, 'age').name;
}

// Given the above data structure. Implement
// a function that will return the oldest age.

oldestAge(people);
console.log(oldestAge(people));
// -> 75

// Also given the above data structure. Implement
// a function that will return and array of the names
// of all living people.

living(people);
console.log(living(people));
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']

// Also give then data structure implement a function
// that will return the name of the oldest living person.

oldestLivingPerson(people);
console.log(oldestLivingPerson(people));
// -> 'Kathy'