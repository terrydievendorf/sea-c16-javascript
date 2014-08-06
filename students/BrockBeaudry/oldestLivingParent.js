function oldestLivingParent(people) {
  var parents = [];
  var alive = [];
  var oldest;

  people.forEach(function(person) {
    if(person.parent)
      parents[person.parent] = true;

    if(person.age) {
      alive.push(person);
    }
  });

  alive.sort(ageSort);

  alive.some(function(person) {
    if(parents[person.name]) {
      oldest = person;
      return true;
    }
  });

  return oldest.name;
}

// Sort in descending order
function ageSort(a, b) {
    return b.age - a.age;
  }
