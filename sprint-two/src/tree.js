var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value)); // fix me
};

treeMethods.contains = function(target) {
  var found = false;
  var searchTree = function(node) {

    if (node.value === target) {
      found = true;
    }

    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
      }
    }

  };

  searchTree(this);
  return found;
};