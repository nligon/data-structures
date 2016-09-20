var Queue = function() {
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.size()] = val;
  },
  dequeue: function() {
    var result = this.storage['0'];
    for (var i = 1; i < this.size(); i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.size() - 1];
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

var functionalSharedQueue = function() {
  for (var i = 0; i < 100; i++) {
    var queue = Queue();
    for (var j = 0; j < 100; j++) {
      queue.enqueue(j);
    }
    for (var j = 0; j < 100; j++) {
      queue.dequeue();
    }
  }
};
functionalSharedQueue();
