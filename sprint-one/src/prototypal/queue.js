var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function (val) {
    this.storage[this.size()] = val;
  },
  dequeue: function () {
    var result = this.storage['0'];
    for (var i = 1; i < this.size(); i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.size() - 1];
    return result;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};