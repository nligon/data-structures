var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value || null;
  newTree.parent = parent || null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
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

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  this.parent = null;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === this) {
      var child = parent.children[i];
      parent.children.splice(i, 1);
      return child;
    }
  }
};