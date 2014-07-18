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

//function that returns the oldest age
var oldestAge = function (people) {
  return _.max(people, 'age').age;
};

console.log(oldestAge(people));

//function that returns an array of the names 
//of all living people
var living = function (people) {
  return _.chain(people)
  .filter('age')
  .map(function(chr){ return chr.name;})
  .value();
};

console.log(living(people));


//function that returns the name of the oldest living person
var oldestLivingPerson = function (people) {
  return _.max(people, function (chr) {return chr.age;}).name;
};

console.log(oldestLivingPerson(people));