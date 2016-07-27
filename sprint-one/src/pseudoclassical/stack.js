var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (val) {
  this.storage[this.size()] = val;
};

Stack.prototype.pop = function () {
  var result = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return result;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
