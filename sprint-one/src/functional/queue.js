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

var functionalQueue = function() {
  for (var i = 0; i < 100; i++) {
    var queue = Queue();
    for (var j = 0; j < 100; j++) {
      queue.enqueue(j);
    }
    for (var j = 0; j < 100; j++) {
      queue.dequeue(j);
    }
  }
};
functionalQueue();
