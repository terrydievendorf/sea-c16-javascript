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
var peopleLength = people.length;
var oldestLivingParent = function(arr) {
  var parentList = []
  var isParent = function(arr) {
    for (i = 0; i < peopleLength; i++){
      if (arr[i].hasOwnProperty("parent")) {
        parentList.push(arr[i].parent);
      }
    }
  };
  var findOldest = function(arr) {
    var oldestAge = 0;
    var oldestPerson;
    for (i = 0; i < peopleLength; i++) {
      if (parentList.indexOf(arr[i].name) > -1) {
        if (arr[i].age > oldestAge) {
          oldestAge = arr[i].age;
          oldestPerson = arr[i].name;
        }
      }
    }
    return oldestPerson;
  };
  isParent(people);
  console.log(findOldest(people));
};