'use strict';

/**
 * @ngdoc function
 * @name burnfightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnfightApp
 */
angular.module('firestarterApp')
  .controller('FightCtrl', ['$scope', '$http', 'ACTIONS', 'INTERACTIONS', 'ADVANTAGES', 'DISADVANTAGES', function ($scope, $http, ACTIONS, INTERACTIONS, ADVANTAGES, DISADVANTAGES) {

    var ctrl = this;

    $scope.aggressiveStance = {
      "name": "aggressive",
      "text": "<p>Aggressive stance grants +2D to Strike and Great " +
        "Strike.</p> <p>Block and Counterstrike suffer +2 Ob penalty.</p> <p>You may not " +
        "Avoid. If you accidently script Avoid while in aggressive stance, " +
        "you hesitate for all action.</p>",
      "mods": ["+2D to Strike and Great Strike", "+2 Ob to Block and CounterStrike.", "Can't Avoid"]
    };
    $scope.neutralStance = {
      "name": "neutral",
      "text": "<p>Neutral stance is the default. You start a fight in neutral " +
        "stance unless otherwise noted.</p> <p>It grants no advantage and suffers no " +
        "disadvantages.</p>",
      "mods": []
    };
    $scope.defensiveStance = {
      "name": "defensive",
      "text": "<p>Defensive stance grants +2D to Avoid, Block and " +
        "Counterstrike.</p> <p>Strike and Great Strike suffer a +2 Ob penalty when " +
        "performed from defensive stance.</p>",
      "mods": ["+2D to Avoid, Block, and Counterstrike", "+2 Ob to Strike and Great Strike"]
    };



    $scope.player1 = {};
    $scope.player2 = {};

    $scope.player1.name = "Player 1";
    $scope.player2.name = "Player 2";

    $scope.player1.modifications = [];
    $scope.player2.modifications = [];
    $scope.player1.injuries = [];
    $scope.player2.injuries = [];

    ctrl.actions = ACTIONS.fight;
    ctrl.interactions = INTERACTIONS.fight;
    ctrl.advantage = ADVANTAGES.position;
    ctrl.disadvantage = DISADVANTAGES.position;
    ctrl.injuries = DISADVANTAGES.injury;

    ctrl.position = "";

    ctrl.player1int = "";
    ctrl.player2int = "";

    $scope.player1.stance = $scope.neutralStance;
    $scope.player2.stance = $scope.neutralStance;

    $scope.addInjury = function(player, injury) {
        player.injuries.push(ctrl.injuries[injury])
        updateInjuryMods(player);
    }

    $scope.clearInjury = function(player) {
      player.injuries = [];
      updateInjuryMods(player);
    }

    var updateInjuryMods = function(player) {
      filterMods(player, "Injury");

      var calcInjuries = [];
      var supInjuryCount = 0;
      player.injuries.forEach(function(injury) {
          if(injury.level == "superficial") {
            supInjuryCount++;
          }
      });

      if(supInjuryCount < 3) {
        calcInjuries = player.injuries;
      } else {
        player.injuries.forEach(function(injury) {
          if(injury.level !== "superficial") {
            calcInjuries.push(injury);
          }
        });
        for(var i = 0; i < Math.floor(supInjuryCount/3); i++) {
          calcInjuries.push(ctrl.injuries.threeSuperficial);
        }
        for(var i = 0; i < supInjuryCount % 3; i++) {
          calcInjuries.push(ctrl.injuries.superficial)
        }
      }

      calcInjuries.forEach(function(injury) {
        player.modifications.push({
          "key": "Injury",
          "value": injury
        });
      });
    }

    $scope.changeStance = function (player, newStance) {
      player.stance = newStance;
      filterMods(player, "Stance");
      newStance.mods.forEach(function (mod) {
        player.modifications.push({
          "key": "Stance",
          "value": mod
        });
      });

    };

    var checkRangeChange = function () {

      if ($scope.player1.range != null
        && $scope.player2.range != null
        && $scope.positionAdvantage != null) {

        $scope.calculatePositionAdvantage($scope.positionAdvantage);
      }
    }

    $scope.p1range = function (range) {
      $scope.player1.range = range;
      checkRangeChange();
    };

    $scope.p2range = function (range) {
      $scope.player2.range = range;
      checkRangeChange();
    };

    $scope.resetAdvantages = function () {
      $scope.player1.modifications = [];
      $scope.player2.modifications = [];
    };

    var filterMods = function (player, key) {
      player.modifications = player.modifications.filter(function (el) {
        return el.key !== key;
      });
    };

    $scope.resetPosition = function() {
      $scope.positionAdvantage = '';
      filterMods($scope.player1, "Positioning");
      filterMods($scope.player2, "Positioning");
    };

    $scope.calculatePositionAdvantage = function (advantagedPlayer) {

      $scope.positionAdvantage = advantagedPlayer;

      filterMods($scope.player1, "Positioning");
      filterMods($scope.player2, "Positioning");

      if ($scope.player1.range != null && $scope.player2.range != null) {

        if (advantagedPlayer == "player1") {
          if (ctrl.advantage[$scope.player1.range][$scope.player2.range].text !== "-") {
            $scope.player1.modifications.push({
              "key": "Positioning",
              "value": ctrl.advantage[$scope.player1.range][$scope.player2.range]
            });
          }
          if (ctrl.disadvantage[$scope.player1.range][$scope.player2.range].text !== "-") {
            $scope.player2.modifications.push({
              "key": "Positioning",
              "value": ctrl.disadvantage[$scope.player1.range][$scope.player2.range]
            });
          }
        }
        else if (advantagedPlayer == "player2") {
          if (ctrl.advantage[$scope.player2.range][$scope.player1.range].text !== "-") {
            $scope.player2.modifications.push({
              "key": "Positioning",
              "value": ctrl.advantage[$scope.player2.range][$scope.player1.range]
            });
          }
          if (ctrl.disadvantage[$scope.player2.range][$scope.player1.range].text !== "-") {
            $scope.player1.modifications.push({
              "key": "Positioning",
              "value": ctrl.disadvantage[$scope.player2.range][$scope.player1.range]
            });
          }
        }
      }
    };

    var capitalize = function (str) {
      return str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    }

    $scope.update = function () {

      if ((ctrl.p1Action === undefined) || (ctrl.p2Action === undefined)) {
        return;
      }

      $scope.player1act = ctrl.p1Action.selected;
      $scope.player2act = ctrl.p2Action.selected;
      $scope.player1int = ctrl.interactions[ctrl.p1Action.selected.name][ctrl.p2Action.selected.name];
      $scope.player2int = ctrl.interactions[ctrl.p2Action.selected.name][ctrl.p1Action.selected.name];

    };

    $scope.isShowableInfo = function (key) {

      if (key.match("id:|name|category|id"))
        return false;
      else
        return true;
    };

  }]);
