var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx) || [];
  var replaced = false;
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === k) {
      bucket[tuple][1] = v;
      replaced = true;
    }
  }

  if (!replaced) {
    bucket.push([k, v]);
    this.counter++;
  }

  this._storage.set(idx, bucket);

  if (this.counter >= this._limit * .75) {
    this._limit = this._limit * 2;
    this.resize();
  }

};

HashTable.prototype.retrieve = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx) || [];
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === k) {
      return bucket[tuple][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === k) {
      bucket.splice(bucket[tuple], 1);
      this.counter--;
    }
  }

  if (this.counter < this._limit * .25) {
    this._limit = this._limit / 2;
    this.resize();
  }

};

HashTable.prototype.resize = function() {
  this.counter = 0;
  var hashTable = this;
  tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);

  tempStorage.each(function (bucket) {
    bucket = bucket || [];
    for (var tuple = 0; tuple < bucket.length; tuple++) {
      hashTable.insert(bucket[tuple][0], bucket[tuple][1]);
    }

  });
};
