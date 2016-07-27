var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    var savedHead = list.head;
    list.head = list.head.next;
    return savedHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== undefined) {
      if (!current) {
        return false;
      }
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
