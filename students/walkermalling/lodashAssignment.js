var oldestAge = function(collection){
    // filter out records with no age
    var peopleWithAges = _.filter(collection,function(record){
        return !!record.age;
    });

    // find record with oldest age
    var oldestAge = _.max(collection,function(record){
        return record.age;
    });

    return oldestAge.age;
}

var livingPeople = function(collection){
    // filter out people with no age
    var living = _.filter(collection,function(record){
        return !!record.age;
    });

    // get their names
    var names = _.pluck(living,'name');

    return names;
}


var oldestLivingPerson = function(collection){
    // filter out people with no age
    var peopleWithAges = _.filter(collection,function(record){
        return !!record.age;
    });

    // find person with oldest age
    var oldestPerson = _.max(peopleWithAges,function(record){
      return record.age;
    });

    return oldestPerson.name;
}