var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

stackMethods = {
  push: function (val) {
    this.storage[this.size()] = val;
  },
  pop: function () {
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return result;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};

var prototypalStack = function () {
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
prototypalStack();