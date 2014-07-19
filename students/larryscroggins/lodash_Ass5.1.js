var _ = require('lodash');

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

