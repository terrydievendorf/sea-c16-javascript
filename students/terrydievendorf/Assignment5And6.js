var _underscore = require('lodash');

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

getOldestAgeWithLodash = function(people) {
  return _underscore.max(people, 'age').age;
}

getArrayOfLivingPeopleWithLodash = function(people) {
  return _underscore.filter(people, 'age');
}

getNameOfOldestLivingPersonWithLodash = function(people) {
  return _underscore.max(people, 'age').name;
}

getOldestAgeWithoutLodash = function(people) {
  oldestAge=0;
  for (i=0;i<people.length;i++) {
    if (people[i].age>oldestAge) {
      oldestAge=people[i].age;
    };
  }
  return oldestAge;  
}

getArrayOfLivingPeopleWithoutLodash = function(people) {
  livingPeople = [];
  for (i=0;i<people.length;i++) {
    if (people[i].age>0) {
      livingPeople.push(people[i]);
    };
  }
  return livingPeople;
}

getArrayOfNamesForLivingPeopleWithoutLodash = function(people) {
  livingPeople = [];
  for (i=0;i<people.length;i++) {
    if (people[i].age>0) {
      livingPeople.push(people[i].name);
    };
  }
  return livingPeople;
}

getNameOfOldestLivingPersonWithoutLodash = function(people) {
  oldestAge=0;
  name='';
  for (i=0;i<people.length;i++) {
    if (people[i].age>oldestAge) {
      oldestAge=people[i].age;
      name=people[i].name;
    }
  }
  return name;
}

getParentNames = function(people) {
  parentNames=[];
  for (i=0;i<people.length;i++) {
    if (people[i].hasOwnProperty("parent")) {
      parentNames.push(people[i].parent);
    }
  }
  return parentNames;
}

getNameOfOldestLivingParent = function(people) {
  parentNames=getParentNames(people);
  oldestName = '';
  oldestAge = 0;
  for (i=0;i<people.length;i++) {
    for (j=0;j<parentNames.length;j++) {
      if (people[i].name=parentNames[j] && people[i].age>oldestAge) {
        oldestName=parentNames[j];
        oldestAge=people[i].age;
      }
    }
  }
  return oldestName;
}


console.log(getOldestAgeWithLodash(people));
console.log(getArrayOfLivingPeopleWithLodash(people));
console.log(getNameOfOldestLivingPersonWithLodash(people));
console.log(getOldestAgeWithoutLodash(people));
console.log(getArrayOfLivingPeopleWithoutLodash(people));
console.log(getNameOfOldestLivingPersonWithoutLodash(people));
console.log(getOldestAgeWithLodash(people));
console.log(getArrayOfLivingPeopleWithLodash(people));
console.log(getNameOfOldestLivingPersonWithLodash(people));
console.log(getNameOfOldestLivingParent(people));
//console.log(getArrayOfNamesForLivingPeopleWithoutLodash(people));

