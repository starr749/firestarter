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

  function SpellFacet(id, name, description){
    this.id = id;
    this.name = name;
    this.description = description;
  }

  var element = new LinkedList();
  element.append(new LinkedList.Node(new SpellFacet(1, "Heaven", "Heaven invokes the sphere of light.")));
  element.append(new LinkedList.Node(new SpellFacet(2, "White", "White is the dangerous sphere of heavenly fire, lightning and all her sisters.")));
  element.append(new LinkedList.Node(new SpellFacet(3, "Fire", "Fire encompasses the sphere of the tool most useful - heat and flame.")));
  element.append(new LinkedList.Node(new SpellFacet(4, "Air", "Air is the element of the wind.")));
  element.append(new LinkedList.Node(new SpellFacet(5, "Earth", "Earth is stone, wood and dirt.")));
  element.append(new LinkedList.Node(new SpellFacet(6, "Water", "Water encompasses rivers, seas, ponds and streams.")));
  element.append(new LinkedList.Node(new SpellFacet(7, "Arcana", "Arcana is the sphere of arcane power - magic.")));
  element.append(new LinkedList.Node(new SpellFacet(8, "Anima", "Anima is the element of the bodies and minds of creatures.")));

  var impetus = new LinkedList();
  impetus.append(new LinkedList.Node(new SpellFacet(1, "Create", "The Create impetus involces fabrication of materials or substance.")));
  impetus.append(new LinkedList.Node(new SpellFacet(2, "Destroy", "The Destroy is one of the dark arts of sorcery. It combines with an element to destroy others.")));
  impetus.append(new LinkedList.Node(new SpellFacet(3, "Tax", "The Tax impetus is another black art designed to drain or weaken the strength of its target element.")));
  impetus.append(new LinkedList.Node(new SpellFacet(4, "Transmute", "To Transmute is to use an element in order to change form, nature, or substance")));
  impetus.append(new LinkedList.Node(new SpellFacet(5, "Control", "The control impetus dominates and commandeers the element, often forcing it into unlikely or impossible positions or situations.")));
  impetus.append(new LinkedList.Node(new SpellFacet(6, "Influence", "Think of a magnet against a compass; such is the effect of the influence impetus.")));
  impetus.append(new LinkedList.Node(new SpellFacet(7, "Enhance", "The Enhance impetus grants a boon to its element: It fortified and strengthens to an otherworldly degree.")));

  var origin = new LinkedList();
  origin.append(new LinkedList.Node(new SpellFacet(1, "Sight Origin", "Spells with Personal Origin can only begin at the caster.")));
  origin.append(new LinkedList.Node(new SpellFacet(2, "Presence Origin",
    "If the caster could speak to the recipient in a normal speaking voice and be understood " +
    "(regardless of other ambient noise), then the recipient is in the Presence of the caster. " +
    "(Thus the caster's Presence does not go through walls.)")));
  origin.append(new LinkedList.Node(new SpellFacet(3, "Personal Origin",
    "If the caster can see it, he can affect it. " +
    'This "sight range" includes extrasensory sight extended by Magesense, Eye of the Eagle a11d such.')));

  var duration = new LinkedList();
  duration.append(new LinkedList.Node(new SpellFacet(1, "Sustained Duration",
    "A sorcerer is rigorously trained in the art of concentration. " +
    "He is able to slip into trance-like meditation almost instantly, and then, while maintaining the trance, " +
    "come forward in his mind and interact normally with his surroundings. " +
    "By dividing his concentration into separate compartments, a sorcerer can sustain one or more spells at a time. " +
    "To sustain a spell once it is cast, the player sets aside one Will die to represent the spell. " +
    "This die is placed at the top of the character sheet. " +
    "So long as the sorcerer is sustaining that spell, the Will die may not be used for any other Will function-body " +
    "of argument in a Duel of Wits, sustaining spells or making tests. " +
    "A sorcerer may maintain as many spells as his Will minus one-he must leave that last die in Will. " +
    "The spell list in the Character Burner indicates whether or not a spell can be sustained. " +
    "It requires one action in Fight to stop sustaining a spell. " +
    "It does not cost an action in Range and Cover or Duel of Wits.")));

  duration.append(new LinkedList.Node(new SpellFacet(2, "Instantaneous Duration",
    "Instantaneous duration spells flicker into being for but a moment and are gone. " +
    "Any effects they have on the environment remain and fade naturally over time.")));

  duration.append(new LinkedList.Node(new SpellFacet(3, "Elapsed Time",
    "Spells with an \"elapsed time\" exist for a predetermined measure of moments, seconds, minutes, hours, days, months or years. " +
    "A spell with an elapsed time duration will say something like “seconds,” “exchanges” or \"hours.\" " +
    "The spell's base duration is equal to one increment of that time. " +
    "So successfully casting a \"minutes\" spell indicates the spell lasts for one minute. " +
    "This duration may be increased by allocating successes over the obstacle into duration. " +
    "Each success so allocated increases the duration by one increment of its measure.")));

  duration.append(new LinkedList.Node(new SpellFacet(4,"Permanent Duration",
    "The magic of a permanent effect spell does not fade. It lasts eternally. The spells may only be stopped through " +
    "other magical means like Faith, spirits or magic-eating sorcery.")));

  var area = new LinkedList();
  area.append(new LinkedList.Node(new SpellFacet(1, "Caster", "Spell affects the the caster.")));
  area.append(new LinkedList.Node(new SpellFacet(2, "Double Area", "Spell affects double the area of the spell.")));
  area.append(new LinkedList.Node(new SpellFacet(3, "Measured Area", "Spell affects a measured area.")));
  area.append(new LinkedList.Node(new SpellFacet(4, "Half Area", "Spell affects half of the area of the spell.")));
  area.append(new LinkedList.Node(new SpellFacet(5, "Double Natural Effect", "Spell affects double the area the natural forces would normally cause to be affected.")));
  area.append(new LinkedList.Node(new SpellFacet(6, "Natural Effect", "Effect is of the natural elements of the spell affecting all things in their purview.")));
  area.append(new LinkedList.Node(new SpellFacet(7, "Half Natural Effect", "Spell affects half the area the natural forces would normally cause to be affected.")));
  area.append(new LinkedList.Node(new SpellFacet(8, "Double Presence", "Spell affects everything extending to twice the range of the presence of the caster.")));
  area.append(new LinkedList.Node(new SpellFacet(9, "Presence", "Spell affects everything in the presence of the caster.")));
  area.append(new LinkedList.Node(new SpellFacet(10, "Half Presence", "Spell affects everything in half the range of the presence of the caster.")));
  area.append(new LinkedList.Node(new SpellFacet(11, "Single Target", "Spell affects evertying in the area touched by the caster")));


  mag.constant('MAGICWHEEL',
    {
      "element": element,
      "impetus": impetus,
      "origin": origin,
      "duration": duration,
      "area": area
    })


})();
