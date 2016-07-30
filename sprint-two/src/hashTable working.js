var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

var countTuples = function(obj) {
  var counter = 0;
  for (var key in obj) {
    // console.log('key', obj[key]);
    if (obj[key] !== undefined && obj[key].length !== 0) {
      // console.log('these are what we are counting:', obj[key]);
      counter++;
    }
  }
  // console.log('storage length:', counter);
  return counter;
};

HashTable.prototype.insert = function(k, v) {

  var idx = getIndexBelowMaxForKey(k, this._limit);
  this._storage[idx] = this._storage[idx] || [];
  // insertion code
  for (var i = 0; i < this._storage[idx].length; i++) {
    if (this._storage[idx][i][0] === k) {
      this._storage[idx][i][1] = v;
      return;
    }
  }
  this._storage[idx].push([k, v]);



  var transfer = function(storage, limit, createIndex) {
    // transfer elements according to new hash
    this.bakStorage = storage;
    storage = {};
    for (var bucket in this.bakStorage) {
      if (typeof this.bakStorage[bucket] === 'function') {
        storage[bucket] = this.bakStorage[bucket];
      } else {
        // get bucket index for new hash
        var idx = createIndex(this.bakStorage[bucket][0][0], limit);
        storage[idx] = storage[idx] || [];
        // iterate over all tuples in bakBucket
        for (var tuple = 0; tuple < this.bakStorage[bucket].length; tuple++) {
          storage[idx].push(this.bakStorage[bucket][0]);
        }
      }
    }
    delete this.bakStorage;
    return storage;
  }; // end transfer subroutine

  // if storage is 75% full, double limit and re-hash elements
  if (countTuples(this._storage) >= this._limit * .75) {
    console.log('********************** storage length just hit ' + countTuples(this._storage) / this._limit * 100 + '% full. Current length:', countTuples(this._storage), 'Current limit:', this._limit, 'Current storage:', this._storage);
    this._limit = this._limit * 2;
    this._storage = transfer(this._storage, this._limit, getIndexBelowMaxForKey);
    console.log('75% full handled. New length:', countTuples(this._storage), 'new limit:', this._limit, 'new storage:', this._storage);
  }

};

HashTable.prototype.retrieve = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  // retrieval code
  if (this._storage[idx] !== undefined) {
    for (var i = 0; i < this._storage[idx].length; i++) {
      if (this._storage[idx][i][0] === k) {
        return this._storage[idx][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  // console.log('running remove, storage is:', this._storage);
  console.log('running remove, storage length is:', countTuples(this._storage));
  var idx = getIndexBelowMaxForKey(k, this._limit);
  // this._storage[idx] = this._storage[idx] || [];
  for (var i = 0; i < this._storage[idx].length; i++) {
    if (this._storage[idx][i][0] === k) {
      this._storage[idx].splice(i, 1);
    }
  }

  console.log('storage length after remove:', countTuples(this._storage));
  console.log('storage after remove', this._storage);
  // transfer code
  var transfer = function(storage, limit, createIndex) {
    console.log('running transfer from retrieve');
    // transfer elements according to new hash
    this.bakStorage = storage;
    storage = {};
    for (var bucket in this.bakStorage) {
      if (typeof this.bakStorage[bucket] === 'function') {
        storage[bucket] = this.bakStorage[bucket];
      } 

      // else {
      //   // get bucket index for new hash
      //   var idx = createIndex(this.bakStorage[bucket][0][0], limit);
      //   storage[idx] = storage[idx] || [];
      //   // iterate over all tuples in bakBucket
      //   for (var tuple = 0; tuple < this.bakStorage[bucket].length; tuple++) {
      //     storage[idx].push(this.bakStorage[bucket][0]);
      //   }
      // }

    }
    delete this.bakStorage;
    return storage;
  }; // end transfer subroutine

  // if storage is 25% full, halve limit and re-hash elements
  if (countTuples(this._storage) <= this._limit * .25) {
    console.log('25% full detected. Current limit:', this._limit, 'Current storage:', this._storage);
    this._limit = this._limit / 2;
    this._storage = transfer(this._storage, this._limit, getIndexBelowMaxForKey);
    console.log('25% full handled. New limit:', this._limit, 'New storage:', this._storage);
  }

};
