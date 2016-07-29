var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

var findStorageLength = function(obj) {
  var counter = 0;
  for (var key in obj) {
    counter++;
  }
  return counter;
};

HashTable.prototype.insert = function(k, v) {

  var idx = getIndexBelowMaxForKey(k, this._limit);
  this._storage[idx] = this._storage[idx] || [];
  for (var i = 0; i < this._storage[idx].length; i++) {
    if (this._storage[idx][i][0] === k) {
      this._storage[idx][i][1] = v;
      return;
    }
  }
  this._storage[idx].push([k, v]);

  // if storage is 75% full, increase limit
  if (findStorageLength(this._storage) >= this._limit * .75) {
    this._limit = this._limit * 2;
    // transfer elements according to new hash
    this.bakStorage = this._storage;
    this._storage = {};
    for (var bucket in this.bakStorage) {
      if (typeof this.bakStorage[bucket] === 'function') {
        this._storage[bucket] = this.bakStorage[bucket];
      } else {
        // get bucket index for new hash
        var idx = getIndexBelowMaxForKey(this.bakStorage[bucket][0][0], this._limit);
        this._storage[idx] = this._storage[idx] || [];
        // iterate over all tuples in bakBucket
        for (var tuple = 0; tuple < this.bakStorage[bucket].length; tuple++) {
          this._storage[idx].push(this.bakStorage[bucket][0]);
        }
      }
    }
    delete this.bakStorage;
  }
};

HashTable.prototype.retrieve = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[idx] !== undefined) {
    for (var i = 0; i < this._storage[idx].length; i++) {
      if (this._storage[idx][i][0] === k) {
        return this._storage[idx][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[idx].length; i++) {
    if (this._storage[idx][i][0] === k) {
      this._storage[idx].splice(i, 1);
    }
  }
};
