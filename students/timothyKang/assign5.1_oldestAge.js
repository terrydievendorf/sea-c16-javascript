var _ = require('lodash');


function oldestAge(people) {
		//console.log(_.max((_.pluck(people, 'age'));
	var old = _.max(people, 'age');
	var newOld = _.omit(old, 'name', 'parent');
	var result = _.values(newOld);
	return parseInt(result);
}



function living(people) {
	var living = _.filter(people, 'age');
	return _.pluck(living, 'name');		
}



function oldestLivingPerson(people) {	
	var old = _.max(people, 'age');
	var newOld = _.omit(old, 'age', 'parent');
	var result = _.values(newOld);
	return result.toString();
}
