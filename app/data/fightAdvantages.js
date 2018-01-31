(function() {
  var adv = angular.module('fightAdvantages', []);

  adv.constant('ADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": "-",
          "short": "+1D",
          "long": "+2D",
          "longer": "+2D",
          "longest": "+2D",
          "missle": "+2D"
          },
        "short": {
          "shortest": "+1D",
          "short": "-",
          "long": "-",
          "longer": "+1D",
          "longest": "+2D",
          "missle": "+2D"
        },
        "long": {
          "shortest": "+2D",
          "short": "+1D",
          "long": "-",
          "longer": "-",
          "longest": "+2D",
          "missle": "+2D"
        },
        "longer": {
          "shortest": "+2D",
          "short": "+2D",
          "long": "+1D",
          "longer": "-",
          "longest": "-",
          "missle": "+1D"
        },
        "longest": {
          "shortest": "+2D",
          "short": "+2D",
          "long": "+2D",
          "longer": "+1D",
          "longest": "-",
          "missle": "-"
        },
        "missle": {
          "shortest": "+2D",
          "short": "+2D",
          "long": "+2D",
          "longer": "+2D",
          "longest": "+1D",
          "missle": "-"
        }
      }
    });

  adv.constant('DISADVANTAGES',
    {
      "position": {
        "shortest": {
          "shortest": "-",
          "short": "+1 Ob",
          "long": "+2 Ob",
          "longer": "+3 Ob",
          "longest": "+4 Ob",
          "missle": "+5 Ob"
        },
        "short": {
          "shortest": "+1 Ob",
          "short": "-",
          "long": "-",
          "longer": "+1 Ob",
          "longest": "+2 Ob",
          "missle": "+3 Ob"
        },
        "long": {
          "shortest": "+2 Ob",
          "short": "+1 Ob",
          "long": "-",
          "longer": "-",
          "longest": "+1 Ob",
          "missle": "+2 Ob"
        },
        "longer": {
          "shortest": "+3 Ob",
          "short": "+2 Ob",
          "long": "+1 Ob",
          "longer": "-",
          "longest": "-",
          "missle": "+1 Ob"
        },
        "longest": {
          "shortest": "+4 Ob",
          "short": "+3 Ob",
          "long": "+2 Ob",
          "longer": "+1 Ob",
          "longest": "-",
          "missle": "-"
        },
        "missle": {
          "shortest": "+5 Ob",
          "short": "+4 Ob",
          "long": "+3 Ob",
          "longer": "+2 Ob",
          "longest": "+1 Ob",
          "missle": "-"
        }
      }
    });

})();
