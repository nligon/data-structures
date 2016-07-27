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
