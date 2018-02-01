(function() {
  var adv = angular.module('fightAdvantages', []);

  adv.constant('ADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": {"text": "-", "type": '', "value": 0},
          "short": {"text": "+1D", "type": 'D', "value": 1},
          "long": {"text": "+2D", "type": 'D', "value": 2},
          "longer": {"text": "+2D", "type": 'D', "value": 2},
          "longest": {"text": "+2D", "type": 'D', "value": 2},
          "missle": {"text": "+2D", "type": 'D', "value": 2}
          },
        "short": {
          "shortest": {"text": "+1D", "type": 'D', "value": 1},
          "short": {"text": "-", "type": '', "value": 0},
          "long": {"text": "-", "type": '', "value": 0},
          "longer": {"text": "+1D", "type": 'D', "value": 1},
          "longest": {"text": "+2D", "type": 'D', "value": 2},
          "missle": {"text": "+2D", "type": 'D', "value": 2}
        },
        "long": {
          "shortest": {"text": "+2D", "type": 'D', "value": 2},
          "short": {"text": "+1D", "type": 'D', "value": 1},
          "long": {"text": "-", "type": '', "value": 0},
          "longer": {"text": "-", "type": '', "value": 0},
          "longest": {"text": "+2D", "type": 'D', "value": 2},
          "missle": {"text": "+2D", "type": 'D', "value": 2}
        },
        "longer": {
          "shortest": {"text": "+2D"},
          "short": {"text": "+2D"},
          "long": {"text": "+1D"},
          "longer": {"text": "-", "type": '', "value": 0},
          "longest": {"text": "-", "type": '', "value": 0},
          "missle": {"text": "+1D"}
        },
        "longest": {
          "shortest": {"text": "+2D", "type": 'D', "value": 2},
          "short": {"text": "+2D", "type": 'D', "value": 2},
          "long": {"text": "+2D", "type": 'D', "value": 2},
          "longer": {"text": "+1D", "type": 'D', "value": 1},
          "longest": {"text": "-", "type": '', "value": 0},
          "missle": {"text": "-", "type": '', "value": 0}
        },
        "missle": {
          "shortest": {"text": "+2D", "type": 'D', "value": 2},
          "short": {"text": "+2D", "type": 'D', "value": 2},
          "long": {"text": "+2D", "type": 'D', "value": 2},
          "longer": {"text": "+2D", "type": 'D', "value": 2},
          "longest": {"text": "+1D", "type": 'D', "value": 1},
          "missle": {"text": "-", "type": '', "value": 0}
        }
      }
    });

  adv.constant('DISADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": {"text": "-", "type": '', "value": 0},
          "short": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "long": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "longer": {"text": "+3 Ob", "type": "Ob", "value": 3},
          "longest": {"text": "+4 Ob", "type": "Ob", "value": 4},
          "missle": {"text": "+5 Ob", "type": "Ob", "value": 5}
        },
        "short": {
          "shortest": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "short": {"text": "-", "type": '', "value": 0},
          "long": {"text": "-", "type": '', "value": 0},
          "longer": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "longest": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "missle": {"text": "+3 Ob", "type": "Ob", "value": 3}
        },
        "long": {
          "shortest": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "short": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "long": {"text": "-", "type": '', "value": 0},
          "longer": {"text": "-", "type": '', "value": 0},
          "longest": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "missle": {"text": "+2 Ob", "type": "Ob", "value": 2}
        },
        "longer": {
          "shortest": {"text": "+3 Ob", "type": "Ob", "value": 3},
          "short": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "long": {"text": "+1 Ob, \"type\": \"Ob\", \"value\": 1"},
          "longer": {"text": "-", "type": '', "value": 0 },
          "longest": {"text": "-", "type": '', "value": 0 },
          "missle": {"text": "+1 Ob, \"type\": \"Ob\", \"value\": 1"}
        },
        "longest": {
          "shortest": {"text": "+4 Ob", "type": "Ob", "value": 4},
          "short": {"text": "+3 Ob", "type": "Ob", "value": 3},
          "long": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "longer": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "longest": {"text": "-", "type": '', "value": 0 },
          "missle": {"text": "-", "type": '', "value": 0}
        },
        "missle": {
          "shortest": {"text": "+5 Ob", "type": "Ob", "value": 5},
          "short": {"text": "+4 Ob", "type": "Ob", "value": 4},
          "long": {"text": "+3 Ob", "type": "Ob", "value": 3},
          "longer": {"text": "+2 Ob", "type": "Ob", "value": 2},
          "longest": {"text": "+1 Ob", "type": "Ob", "value": 1},
          "missle": {"text": "-", "type": '', "value": 0 }
        }
      },
      "injury": {
        "superficial":{"level": "superficial", "effect": "+1 Ob", "text": "Superficial Wound +1 Ob", "value": 1, "type": "Ob"},
        "threeSuperficial": {"level": "light (3 Superficial)", "text": "Light Wound (3 Superficial) -1D", "value": -1, "type": "D"},
        "light": {"level": "light", "effect": "-1D", "text": "Light Wound -1D", "value": -1, "type": "D"},
        "midi": {"level": "midi", "effect": "-2D", "text": "Midi Wound -2D", "value": -2, "type": "D"},
        "severe": {"level": "severe", "effect": "-3D", "text": "Severe Wound -3D", "value": -3, "type": "D"},
        "traumatic": {"level": "traumatic", "effect": "-4D", "text": "Traumatic Wound -4D", "value": -4, "type": "D"}
      }
    });

})();
