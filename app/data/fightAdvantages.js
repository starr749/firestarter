(function() {
  var adv = angular.module('fightAdvantages', []);

  adv.constant('ADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": {"text": "-"},
          "short": {"text": "+1D"},
          "long": {"text": "+2D"},
          "longer": {"text": "+2D"},
          "longest": {"text": "+2D"},
          "missle": {"text": "+2D"}
          },
        "short": {
          "shortest": {"text": "+1D"},
          "short": {"text": "-"},
          "long": {"text": "-"},
          "longer": {"text": "+1D"},
          "longest": {"text": "+2D"},
          "missle": {"text": "+2D"}
        },
        "long": {
          "shortest": {"text": "+2D"},
          "short": {"text": "+1D"},
          "long": {"text": "-"},
          "longer": {"text": "-"},
          "longest": {"text": "+2D"},
          "missle": {"text": "+2D"}
        },
        "longer": {
          "shortest": {"text": "+2D"},
          "short": {"text": "+2D"},
          "long": {"text": "+1D"},
          "longer": {"text": "-"},
          "longest": {"text": "-"},
          "missle": {"text": "+1D"}
        },
        "longest": {
          "shortest": {"text": "+2D"},
          "short": {"text": "+2D"},
          "long": {"text": "+2D"},
          "longer": {"text": "+1D"},
          "longest": {"text": "-"},
          "missle": {"text": "-"}
        },
        "missle": {
          "shortest": {"text": "+2D"},
          "short": {"text": "+2D"},
          "long": {"text": "+2D"},
          "longer": {"text": "+2D"},
          "longest": {"text": "+1D"},
          "missle": {"text": "-"}
        }
      }
    });

  adv.constant('DISADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": {"text": "-"},
          "short": {"text": "+1 Ob"},
          "long": {"text": "+2 Ob"},
          "longer": {"text": "+3 Ob"},
          "longest": {"text": "+4 Ob"},
          "missle": {"text": "+5 Ob"}
        },
        "short": {
          "shortest": {"text": "+1 Ob"},
          "short": {"text": "-"},
          "long": {"text": "-"},
          "longer": {"text": "+1 Ob"},
          "longest": {"text": "+2 Ob"},
          "missle": {"text": "+3 Ob"}
        },
        "long": {
          "shortest": {"text": "+2 Ob"},
          "short": {"text": "+1 Ob"},
          "long": {"text": "-"},
          "longer": {"text": "-"},
          "longest": {"text": "+1 Ob"},
          "missle": {"text": "+2 Ob"}
        },
        "longer": {
          "shortest": {"text": "+3 Ob"},
          "short": {"text": "+2 Ob"},
          "long": {"text": "+1 Ob"},
          "longer": {"text": "-"},
          "longest": {"text": "-"},
          "missle": {"text": "+1 Ob"}
        },
        "longest": {
          "shortest": {"text": "+4 Ob"},
          "short": {"text": "+3 Ob"},
          "long": {"text": "+2 Ob"},
          "longer": {"text": "+1 Ob"},
          "longest": {"text": "-"},
          "missle": {"text": "-"}
        },
        "missle": {
          "shortest": {"text": "+5 Ob"},
          "short": {"text": "+4 Ob"},
          "long": {"text": "+3 Ob"},
          "longer": {"text": "+2 Ob"},
          "longest": {"text": "+1 Ob"},
          "missle": {"text": "-"}
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
