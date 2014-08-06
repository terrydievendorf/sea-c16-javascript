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

var livingPeople = [];
var findLiving = function(people) {
  for(i = 0; i < people.length; i++) {
    if (people[i].age) {
      livingPeople.push(people[i].name);
    }  
  }
}

var oldestAge = function(people) {
  var agesOfLiving = [];
  for(i = 0; i < people.length; i++) {
    if(people[i].age) {
      agesOfLiving.push(people[i].age);
    }
  }
  agesOfLiving.sort();
  console.log(agesOfLiving[agesOfLiving.length - 1]);
}

function oldestParent(people) {
  var parents = [];
  people.forEach(function(person) {
    if (person.parent) {
      parents[person.parent] = true;
    }
  });

  var nameOldestParent = "";
  var oldestAge = 0;
  people.forEach(function(person) {
    if (parents[person.name] && person.age > oldestAge) {
      oldestAge = person.age;
      nameOldestParent = person.name;
    }
  });
  return nameOldestParent;
  console.log(nameOldestParent);
}

findLiving(people);
oldestAge(people);
console.log(livingPeople);
oldestParent(people);