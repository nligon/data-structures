var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var result = storage['0'];
    for (var i = 1; i < someInstance.size(); i++) {
      storage[i - 1] = storage[i]; 
    }
    delete storage[someInstance.size() - 1];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
