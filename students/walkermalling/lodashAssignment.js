/**
 * Get a subset of the collection given a filter key
 * 
 * @param  collection   the colleciton of people
 * @param  filter       the desired key to filter for
 * @return [{}]         an array of people objects
 */
var filterPeople = function(collection, filter){
    var newCollection = _.filter(collection,function(record){
      return !!record[filter];
    });
}

/**
 * Get the record of the oldest person in a collection
 * @param  collection   the colleciton of people
 * @return {}           object record of the person
 */
var oldestPerson = function(collection){
    // filter out records with no age
    var peopleWithAges = filterPeople(collection,'age');

    // find record with oldest age
    var oldest = _.max(collection,function(record){
        return record.age;
    });

    return oldest;
}

/**
 * return the oldest age in a collection
 * 
 */
var oldestAge = function(collection){
   var oldest = oldestPerson(collection);
   return oldest.age;   
}

/**
 * return an array of the names of the living people
 * in a given collection
 */
var livingPeople = function(collection){
    // filter out people with no age
    var living = filterPeople(collection,'age');

    // get their names
    var names = _.pluck(living,'name');

    return names;
}

/**
 * return the name of the oldest person
 * in a given collection
 */
var oldestLivingPerson = function(collection){
    var oldest = oldestPerson(collection);
    return oldest.name;
}