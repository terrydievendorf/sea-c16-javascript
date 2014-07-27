function oldestLivingParent(people) {
  
  var peopleStillAlive = {},
      parents = {};
    
  people.forEach(function(person) {
    if (person.age) {
      peopleStillAlive[person.name] = person.age;
      if (person.parent) {
          parents[person.parent] = true;
      }
    }
  });

  var highestNum = 0,
      highestParentName;
  
  _.forEach(parents, function(parentValue, parentName) {
      if (peopleStillAlive[parentName] > highestNum) {
          highestParentName = parentName;
      }
  });
    return highestParentName;
}