//Thanks to Hailey and Jeff for their help with this assignment.
var add = function (x, y) {
  return x + y;
};

var countDecorator = function (f) {
  var callNumber = 0;
  var wrapper = function() {
    callNumber++;
    return f.apply(this, arguments);
  };

  wrapper.callCount = function() {
    return callNumber;
  };
  return wrapper;
};

add = countDecorator(add);
