var filterPeople = function(collection, filter){
    var newCollection = _.filter(collection,function(record){
      return !!record[filter];
    });
}

var oldestPerson = function(collection){
    // filter out records with no age
    var peopleWithAges = filterPeople(collection,'age');

    // find record with oldest age
    var oldest = _.max(collection,function(record){
        return record.age;
    });

    return oldest;
}

var oldestAge = function(collection){
   var oldest = oldestPerson(collection);
   return oldest.age;   
}

var livingPeople = function(collection){
    // filter out people with no age
    var living = filterPeople(collection,'age');

    // get their names
    var names = _.pluck(living,'name');

    return names;
}


var oldestLivingPerson = function(collection){
    var oldest = oldestPerson(collection);
    return oldest.name;
}