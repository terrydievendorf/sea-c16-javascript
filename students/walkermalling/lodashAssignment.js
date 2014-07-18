var oldestAge = function(collection){
    // filter out records with no age
    var peopleWithAges = _.filter(collection,function(record){
        return !!record.age;
    });

    // find record with oldest age
    var oldestAge = -1;
    for(var k = 0; k < peopleWithAges.length; k++){
      if ( peopleWithAges[k].age > oldestAge ) oldestAge = peopleWithAges[k].age;
    }

    return oldestAge;
}

var livingPeople = function(collection){
    // filter out people with no age
    var living = _.filter(collection,function(record){
        return !!record.age;
    });

    // get their names
    var names = _.map(living,function(record){
      return record.name;
    });

    return names;
}


var oldestLivingPerson = function(collection){
    // filter out people with no age
    var peopleWithAges = _.filter(collection,function(record){
        return !!record.age;
    });

    // find person with oldest age
    var oldestPerson = { age : -1 };
    for(var k = 0; k < peopleWithAges.length; k++){
        if ( peopleWithAges[k].age > oldestPerson.age ){
            oldestPerson = peopleWithAges[k];
        }
    }

    return oldestPerson.name;
}