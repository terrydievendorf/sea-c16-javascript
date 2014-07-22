var oldestLivingParent = function () {
  var old = _.max(people, 'age');
  var newOld = _.omit(old, 'age', 'name');
  var result = _.values(newOld);
  return result.toString();
};










