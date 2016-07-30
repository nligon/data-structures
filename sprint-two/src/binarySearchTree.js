//Make your binarySearchTree rebalance as soon as the max depth is more than twice the minimum depth

// Track total number of nodes by attaching a counter to the insert method

// track longest current depth

// Calculate the minimum theoretical number of layers using Math.ceil(log2(nodes + 1))

// when longest current depth is more than double minimum theoretical depth, rebalance



var BinarySearchTree = function(value, parent) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.parent = parent || null;



  if (this.parent === null) { // if root
    this.numOfNodes = 1;
    this.depth = 1;
    BinarySearchTree.maxDepth = 0;
    BinarySearchTree.deepestNode = this;
  } else { // if child
    this.depth = parent.depth + 1;
  }

};


BinarySearchTree.prototype.insert = function(value, parent) {
  // console.log('root node', this);
  // maxDepth = this.maxDepth;
  var insertTree = function(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(value, node);
        if (node.left.depth > BinarySearchTree.maxDepth) {
          BinarySearchTree.maxDepth = node.left.depth;
          BinarySearchTree.deepestNode = node.left;
        }
      } else {
        insertTree(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new BinarySearchTree(value, node);
        if (node.right.depth > BinarySearchTree.maxDepth) {
          BinarySearchTree.maxDepth = node.right.depth;
          BinarySearchTree.deepestNode = node.right;
        }
      } else {
        insertTree(node.right, value);
      }
    }
  };

  // this.maxDepth = maxDepth;
  insertTree(this, value);
  this.numOfNodes++;
  // console.log(BinarySearchTree.maxDepth);



  // If maximum depth is more than double minimum potential depth, rebalance tree
  var minDepth = Math.ceil(Math.log2(this.numOfNodes + 1));
  if (minDepth * 2 < BinarySearchTree.maxDepth) {
    this.rebalance();
  }
};

BinarySearchTree.prototype.getMinDepth = function() {
  return;
};

BinarySearchTree.prototype.rebalance = function() {

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

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
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
