var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  console.log('********************** NEW EXECUTION ********************');

  // if (!this.value) {
  //   this.value = node;
  // }

  // if tree is less than value
  // is left null? assign tree(node) to left.
  // else, recurse on left.
  // else (tree is greater than value)
  // is right null? assign tree(node) to right.
  // if defined, recurse on right.

  // if value less, go left
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



BinarySearchTree.prototype.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
