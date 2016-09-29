'use strict';

/**
 * @ngdoc function
 * @name burnfightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnfightApp
 */
angular.module('firestarterApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    var ctrl = this;

    ctrl.action = {};

    ctrl.player1int = "";
    ctrl.player2int = "";

    // TODO: The actions and their functions need to be in their own module

    var strikeResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Speed";
      } else if (['Block'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      } else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def from Skill";
      } else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob = 1/2 Spd";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Skill Test: Ob 1";
      }
    };

    var greatStrikeResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Speed";
      } else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def from Skill";
      } else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob = 1/2 Spd";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Skill Test: Ob 1";
      }
    };

    var avoidResolve = function(opposeAct) {
      if (['Great Strike', 'Strike', 'Beat', 'Throw' ].indexOf(opposeAct.name) !== -1) {
        return "Speed vs Skill";
      }else if (['Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Spd + (Ob = Skill) vs Skill";
      }else if (['Charge/Tackle'].indexOf(opposeAct.name) !== -1) {
        return "Spd vs Pow + 1D";
      }else if (['Lock', 'Push'].indexOf(opposeAct.name) !== -1) {
        return "Spd vs Pow";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "-";
      }
    };

    var blockResolve = function(opposeAct) {
      if (['Strike', 'Beat'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      }else if (['Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Skill + (Ob = Skill) vs Skill";
      }else if (['Lock', 'Push'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Pow";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "-";
      }
    };

    var counterstrikeResolve = function(opposeAct) {
      if (['Great Strike', 'Strike', 'Beat', 'Lock', 'Push' ].indexOf(opposeAct.name) !== -1) {
        return "Def from Skill vs Skill";
      }else if (['Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Defense + (Ob = Skill) vs Skill";
      }else if (['Lock', 'Push'].indexOf(opposeAct.name) !== -1) {
        return "Def from Skill vs Pow";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "-";
      }
    };

    var beatResolve = function(opposeAct) {
      if (['Avoid' ].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Speed";
      }else if (['Block', 'Feint'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      }else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def from Skill";
      }else if (['Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def from Skill";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else if (['Stand and Droll', 'Fall Prone', 'Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob 1";
      } else {
        return "Std Skill Test: Ob = 1/2 Skill";
      }
    };

    var disarmResolve = function(opposeAct) {
      if (['Feint' ].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      }else if (['Block', 'Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Spd +(Ob = Skill)";
      }else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def. + (Ob = Skill)";
      }else if (['Disarm', 'Lock', 'Push', 'Throw'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob = Skill";
      } else if (['Beat'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill + (Ob = Skill)";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else if (['Stand and Droll', 'Fall Prone'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob 1";
      } else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob = 1/2 Skill";
      } else {
        return "Std Skill Test: Ob = Skill";
      }
    };

    var feintResolve = function(opposeAct) {
      if (['Block', 'Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob 1";
      }else if (['Beat', 'Disarm', 'Feint'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "-";
      }
    };

    var chargeTackleResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Pow +1D vs Spd";
      }else if (['Block', 'Counterstrike', 'Beat'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test: +1D Ob= 1/2 Spd";
      } else if (['Charge/Tackle'].indexOf(opposeAct.name) !== -1) {
        return "Pow +1D vs Pow +1D";
      }else if (['Push'].indexOf(opposeAct.name) !== -1) {
        return "Pow +1D vs Pow";
      }else if (['Throw'].indexOf(opposeAct.name) !== -1) {
        return "Pow +1D vs Skill";
      }else if (['Stand & Drool', 'Fall Prone'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test +1D: Ob 1";
      }else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Power + 1D vs Speed";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Pow Test: +1D Ob= 1/2 For";
      }
    };

    var lockResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Spd";
      }else if (['Block', 'Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Skill";
      } else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Def. from Skill";
      }else if (['Lock'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Pow";
      }else if (['Stand & Drool', 'Fall Prone'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test: Ob 1";
      }else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Power vs Agility";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Pow Test: Ob= 1/2 Pow";
      }
    };

    var pushResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Spd";
      }else if (['Block'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Skill";
      }else if (['Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test: Ob= ½ Pow";
      } else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Def. from Skill";
      } else if (['Charge/Tackle'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Pow +1D";
      }else if (['Push'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Pow";
      }else if (['Throw'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Skill";
      }else if (['Stand & Drool', 'Fall Prone'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test +1D: Ob 1";
      }else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Power vs Speed";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Pow Test: Ob= 1/2 Spd";
      }
    };

    var throwResolve = function(opposeAct) {
      if (['Avoid'].indexOf(opposeAct.name) !== -1) {
        return "Pow vs Spd";
      }else if (['Block'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      }else if (['Beat', 'Disarm'].indexOf(opposeAct.name) !== -1) {
        return "Std Skill Test: Ob= 1/2 Agi";
      } else if (['Counterstrike'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Def. from Skill";
      } else if (['Charge/Tackle'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Pow +1D";
      }else if (['Push', 'Lock'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Pow";
      }else if (['Throw'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Skill";
      }else if (['Stand & Drool', 'Fall Prone'].indexOf(opposeAct.name) !== -1) {
        return "Std Pow Test +1D: Ob 1";
      }else if (['Run Screaming'].indexOf(opposeAct.name) !== -1) {
        return "Skill vs Speed";
      } else if (['Swoon'].indexOf(opposeAct.name) !== -1) {
        return "Special";
      } else {
        return "Std Pow Test: Ob= 1/2 Spd";
      }
    };

    var assessResolve = function(foo) {
      return "Perception Test (according to intent and task)";
    };

    var physicalActionResolve = function(foo) {
      return "Physical actions typically use Power (to rip something open), Agility (to grab something) " +
        "or Speed (to vault something).";
    };

    var throwWeaponResolve = function(foo) {
      return "Throwing skill. lt's an Ob 2 test to hit plus disadvantages from vying for position, weather and light.";
    };

    var aimResolve = function(foo) {
      return "A player may spend actions aiming a loaded and ready weapon—a knife in the ha11d, nocked and drawn bow," +
        " a loaded gun, etc. Each action spent gives a +1D advantage. Characters may aim for as many actions as half " +
        "their Perception exponent rounded up. When aiming with a crossbow, gun or thrown weapon, script your Aim " +
        "actions first, then script your Throw or Fire actions. When aiming a bow, put your Aim actions after your Nook" +
        " and Draw actions, before you script Release.";
    };

    var nockAndDrawResolve = function(foo) {
      return "This extended action readies your bow to shoot. Each type of bow has a different load time: Hunting bow, " +
        "5 actions; Elven bow, 5 actions; Great bow, 7 actions. To hit your target, script the Release action " +
        "after Nook and Draw.";
    };

    var fireGunOrCrossbowResolve = function(foo) {
      return "Firearms or Crossbow skill as appropriate. lt's an Ob 2 test to hit with a gun (plus disadvantages for " +
        "vying for position, light and weather).";
    };

    var releaseBowResolve = function(foo) {
      return "Std Bow skill Test: Ob = l (plus disadvantages).";
    };

    var snapshotResolve = function(foo) {
      return "Snapshot is an Ob 4 test for the Bow, Crossbow, Firearms, or Throwing skill.";
    };

    var castSpellResolve = function(foo) {
      return "Sorcery or appropriate spell-casting skill after the sorcerer has spent the prerequisite " +
        "actions casting the spell. Ob depends on spell description.";
    };

    var intimidationResolve = function(foo) {
      return "Intimidation Ob = Will.";
    };

    ctrl.actions = [
      {id: 1, name: 'Strike', category: 'Attack Actions', resolveFunction: strikeResolve,
        test: "Your Weapon, Brawling, or Boxing",
        restrictions: "",
        effect: "Successes over the obstacle or margin of success in versus tests are used to increase damage and target " +
        "a specific location. See the weapons chapter for instructions on doing damage. You can only" +
        "Strike consecutively a number of times equal to your weapon speed." +
        "If you're alternating between different weapons, use the lower weapon speed."},

      {id: 2, name: 'Great Strike', category: 'Attack Actions', resolveFunction: greatStrikeResolve,
        test: "Your Weapon, Brawling or Boxing",
        restrictions: ""},
      {id: 3, name: 'Avoid', category: 'Defense Actions', resolveFunction: avoidResolve},
      {id: 4, name: 'Block', category: 'Defense Actions', resolveFunction: blockResolve},
      {id: 5, name: 'Counterstrike', category: 'Defense Actions', resolveFunction: counterstrikeResolve},
      {id: 6, name: 'Assess', category: 'Basic Fighting Actions', resolveFunction: assessResolve},
      {id: 7, name: 'Change Stance', category: 'Basic Fighting Actions', resolveFunction: function(foo){ return "-"; }},
      {id: 8, name: 'Charge/Tackle', category: 'Basic Fighting Actions', resolveFunction: chargeTackleResolve},
      {id: 9, name: 'Draw Weapon', category: 'Basic Fighting Actions', resolveFunction: function(foo){ return "-"; }},
      {id: 10, name: 'Get Up', category: 'Basic Fighting Actions', resolveFunction: function(foo){ return "-"; }},
      {id: 11, name: 'Lock', category: 'Basic Fighting Actions', resolveFunction: lockResolve},
      {id: 12, name: 'Push', category: 'Basic Fighting Actions', resolveFunction: pushResolve},
      {id: 13, name: 'Physical Action', category: 'Basic Fighting Actions', resolveFunction: physicalActionResolve},
      {id: 14, name: 'Beat', category: 'Special Fighting Actions', resolveFunction: beatResolve},
      {id: 15, name: 'Disarm', category: 'Special Fighting Actions', resolveFunction: disarmResolve},
      {id: 16, name: 'Feint', category: 'Special Fighting Actions', resolveFunction: feintResolve},
      {id: 17, name: 'Throw Person', category: 'Special Fighting Actions', resolveFunction: throwResolve},
      {id: 18, name: 'Aim', category: 'Shooting and Throwing Actions', resolveFunction: aimResolve},
      {id: 19, name: 'Fire Gun/Crossbow', category: 'Shooting and Throwing Actions', resolveFunction: fireGunOrCrossbowResolve},
      {id: 20, name: 'Nook and Draw', category: 'Shooting and Throwing Actions', resolveFunction: nockAndDrawResolve},
      {id: 21, name: 'Release Bow', category: 'Shooting and Throwing Actions', resolveFunction: releaseBowResolve},
      {id: 22, name: 'Snapshot', category: 'Shooting and Throwing Actions', resolveFunction: snapshotResolve},
      {id: 23, name: 'Throw Weapon', category: 'Shooting and Throwing Actions', resolveFunction: throwWeaponResolve},
      {id: 24, name: 'Cast Spell', category: 'Magic Actions', resolveFunction: castSpellResolve},
      {id: 25, name: 'Drop Spell', category: 'Magic Actions', resolveFunction: function(foo){ return "-";}},
      {id: 26, name: 'Command Spirit', category: 'Magic Actions', resolveFunction: function(foo){return "-";}},
      {id: 27, name: 'Sing, Howl, Pray', category: 'Magic Actions', resolveFunction: function(foo){}},
      {id: 28, name: 'Command', category: 'Social Actions', resolveFunction: function(foo){return "-";}},
      {id: 29, name: 'Intimidate', category: 'Social Actions', resolveFunction: intimidationResolve},
      {id: 30, name: 'Fall Prone', category: 'Hesitation Actions', resolveFunction: function(foo){return "-";}},
      {id: 31, name: 'Run Screaming', category: 'Hesitation Actions', resolveFunction: function(foo){return "-";}},
      {id: 32, name: 'Stand & Drool', category: 'Hesitation Actions', resolveFunction: function(foo){return "-";}},
      {id: 33, name: 'Swoon', category: 'Hesitation Actions', resolveFunction: function(foo){return "-";}}
    ];

    $scope.update = function() {
      if( (ctrl.p1Action === undefined) || (ctrl.p2Action === undefined)){
        return;
      }

      $scope.player1int = ctrl.p1Action.selected.resolveFunction(ctrl.p2Action.selected);
      $scope.player2int = ctrl.p2Action.selected.resolveFunction(ctrl.p1Action.selected);
    };
  }]);
