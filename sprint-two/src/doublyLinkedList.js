var DoublyLinkedList = function() {
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
      node.previous = list.tail;
      list.tail = node;
    }

  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (!list.tail) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }

  };

  list.removeHead = function() {
    var savedHead = list.head;
    if (list.head.next) {
      list.head.next.previous = null;
    }
    list.head = list.head.next;
    return savedHead.value;
  };

  list.removeTail = function() {
    var savedTail = list.tail;
    if (list.head.previous) {
      list.tail.previous.next = null;
    }
    list.tail = list.tail.previous;
    return savedTail.value;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
