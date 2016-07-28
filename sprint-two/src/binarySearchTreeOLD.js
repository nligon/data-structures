var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  console.log('********************** NEW EXECUTION ********************');
  var tree = BinarySearchTree(value);

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
    console.log('insertTree running');
    console.log('current node is', node);
    console.log('current this is', this)
    console.log('value to insert is', value);
    var tree = new BinarySearchTree(node);
    if (this.value < node.value) {
      console.log('value to insert is less than this node');
      if (this.left === null) {
        // create
        node.left = tree;
        console.log('I assigned a value on the left of this node! Here it is:');
        console.log('tree I was supposed to insert: ' + tree)
        console.log('actual left node: 'node.left);
      } else {
        console.log('left node is taken up, recursing on it');
        // recurse
        insertTree(node.left, val);
      }

      // if value same or greater, go right
    } else {
      console.log('value to insert is more than this node');
      if (this.right === null) {
        // create
        node.right = tree;
        console.log('I assigned a value on the right of this node! Here it is:');
        console.log(node.right);
      } else {
        console.log('right node is taken up, recursing on it');
        // recurse
        insertTree(node.right, node);
      }
    }
  };

  insertTree(this, value);

};



BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
