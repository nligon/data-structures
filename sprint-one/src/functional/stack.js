var Stack = function() {
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var result = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var functionalStack = function() {
  for (var i = 0; i < 100; i++) {
    var stack = Stack();
    for (var j = 0; j < 100; j++) {
      stack.push(j);
    }
    for (var j = 0; j < 100; j++) {
      stack.pop();
    }
  }
};

functionalStack();
