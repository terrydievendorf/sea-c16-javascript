var oldestAge = function(people) {
  var maxAge = _.max(people, function(person) {
    return person.age;
  });
  return maxAge.age;
};

var living = function(people) {
  var filterForAge = _.filter(people, function(number) {
    if (number.age) {
      return number;
    }
  });
  var pluckForName = _.pluck(filterForAge, "name");
  return pluckForName;
};


var oldestLivingPerson = function(people) {
  var oldPerson = _.max(people, function(person) {
    return person.age;
  });
  return oldPerson.name;
};
