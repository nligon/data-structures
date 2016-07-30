//Make your binarySearchTree rebalance as soon as the max depth is more than twice the minimum depth

var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var insertTree = function(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(value);
      } else {
        insertTree(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new BinarySearchTree(value);
      } else {
        insertTree(node.right, value);
      }
    }
  };
  insertTree(this, value);
};

BinarySearchTree.prototype.contains = function(value) {
  var searchTree = function(node, value) {
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      if (node.left !== null) {
        return searchTree(node.left, value);
      }
    } else {
      if (node.right !== null) {
        return searchTree(node.right, value); 
      }
    }
    return false;
  };
  return searchTree(this, value);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var callBackNodes = function(node, cb) {
    cb(node.value);
    if (node.left !== null) {
      callBackNodes(node.left, cb);
    }
    if (node.right !== null) {
      callBackNodes(node.right, cb);
    }
  };
  callBackNodes(this, cb);
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  var queue = [this];

  while (queue.length) {
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    cb(queue.shift().value);
  }
};
