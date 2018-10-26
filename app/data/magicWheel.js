(function() {
  var mag = angular.module('magicWheel', []);

  LinkedList.Node = Node;

  function Node(data) {
    this.prev = null;
    this.next = null;
    this.data = data
  }

  function LinkedList() {
    this.length = 0;
    this.first = null;
    this.last = null
  }

  LinkedList.prototype.append = function(node) {
    if (this.first === null) {
      this.first = node.prev = node;
      this.last = node.next = node
    } else {
      node.prev = this.last;
      node.next = this.first;
      this.first.prev = node;
      this.last.next = node;
      this.last = node
    }

    this.length += 1
  };

  LinkedList.prototype.insert = function(node, inserted) {
    inserted.prev = node;
    inserted.next = node.next;
    node.next.prev = inserted;
    node.next = inserted;
    if (inserted.prev === this.last) this.last = inserted;

    this.length += 1
  };

  LinkedList.prototype.remove = function(node) {
    if (this.length > 1) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      if (node === this.first) this.first = node.next;
      if (node === this.last) this.last = node.prev
    } else
    if (this.first === node) {
      this.first = null;
      this.last = null
    }
    node.prev = null;
    node.next = null;

    this.length -= 1
  };

  LinkedList.prototype.each = function(cb) {
    var p = this.first;
    var n = this.length;

    while (n--) {
      cb(p.data);
      p = p.next
    }
  }

  var element = new LinkedList();
  element.append(new LinkedList.Node("Heaven"));
  element.append(new LinkedList.Node("White"));
  element.append(new LinkedList.Node("Fire"));
  element.append(new LinkedList.Node("Air"));
  element.append(new LinkedList.Node("Earth"));
  element.append(new LinkedList.Node("Water"));
  element.append(new LinkedList.Node("Arcana"));
  element.append(new LinkedList.Node("Anima"));

  var impetus = new LinkedList();
  impetus.append(new LinkedList.Node("Create"));
  impetus.append(new LinkedList.Node("Destroy"));
  impetus.append(new LinkedList.Node("Tax"));
  impetus.append(new LinkedList.Node("Transmute"));
  impetus.append(new LinkedList.Node("Control"));
  impetus.append(new LinkedList.Node("Influence"));
  impetus.append(new LinkedList.Node("Enhance"));

  var origin = new LinkedList();
  origin.append(new LinkedList.Node("Sight Origin"));
  origin.append(new LinkedList.Node("Presence Origin"));
  origin.append(new LinkedList.Node("Personal Origin"));

  var duration = new LinkedList();
  duration.append(new LinkedList.Node("Sustained Duration"));
  duration.append(new LinkedList.Node("Instantaneous Duration"));
  duration.append(new LinkedList.Node("Elapsed Time"));
  duration.append(new LinkedList.Node("Permanent Duration"));

  var area = new LinkedList();
  area.append(new LinkedList.Node("Caster"));
  area.append(new LinkedList.Node("Double Area"));
  area.append(new LinkedList.Node("Measured Area"));
  area.append(new LinkedList.Node("Half Area"));
  area.append(new LinkedList.Node("Double Natural Effect"));
  area.append(new LinkedList.Node("Natural Effect"));
  area.append(new LinkedList.Node("Half Natural Effect"));
  area.append(new LinkedList.Node("Double Presence"));
  area.append(new LinkedList.Node("Presence"));
  area.append(new LinkedList.Node("Half Presence"));
  area.append(new LinkedList.Node("Single Target"));


  mag.constant('MAGICWHEEL',
    {
      "element": element,
      "impetus": impetus,
      "origin": origin,
      "duration": duration,
      "area": area
    })


})();
