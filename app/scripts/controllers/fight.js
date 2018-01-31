'use strict';

/**
 * @ngdoc function
 * @name burnfightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnfightApp
 */
angular.module('firestarterApp')
  .controller('FightCtrl',['$scope', '$http', 'ACTIONS', 'INTERACTIONS', 'ADVANTAGES', 'DISADVANTAGES', function ($scope, $http, ACTIONS, INTERACTIONS, ADVANTAGES, DISADVANTAGES) {

    var ctrl = this;

    $scope.aggressiveStance = { "name": "aggressive", "text":  "<p>Aggressive stance grants +2D to Strike and Great " +
      "Strike.</p> <p>Block and Counterstrike suffer +2 Ob penalty.</p> <p>You may not " +
      "Avoid. If you accidently script Avoid while in aggressive stance, " +
      "you hesitate for all action.</p>"};
    $scope.neutralStance = {"name": "neutral", "text": "<p>Neutral stance is the default. You start a fight in neutral " +
      "stance unless otherwise noted.</p> <p>It grants no advantage and suffers no " +
      "disadvantages.</p>" };
    $scope.defensiveStance = { "name": "defensive", "text": "<p>Defensive stance grants +2D to Avoid, Block and " +
      "Counterstrike.</p> <p>Strike and Great Strike suffer a +2 Ob penalty when " +
      "performed from defensive stance.</p>"};



    $scope.player1 = {};
    $scope.player2 = {};

    $scope.player1.modifications = [];
    $scope.player2.modifications = [];

    ctrl.actions = ACTIONS.fight;
    ctrl.interactions = INTERACTIONS.fight;
    ctrl.advantage = ADVANTAGES.position;
    ctrl.disadvantage = DISADVANTAGES.position;

    ctrl.position = "";

    ctrl.player1int = "";
    ctrl.player2int = "";

    $scope.player1.stance = $scope.neutralStance;
    $scope.player2.stance = $scope.neutralStance;

    $scope.changeStance = function(newStance) {
      console.log(newStance);
      $scope.player1.stance = newStance;
    };

    $scope.changeStanceP2 = function(newStance) {
      $scope.player2.stance = newStance;
    };

    $scope.p1range = function(range) {
      $scope.player1.range = range;
    };

    $scope.p2range = function (range) {
      $scope.player2.range = range;
    };

    $scope.resetAdvantages = function() {
      $scope.player1.modifications = [];
      $scope.player2.modifications = [];
    };

    $scope.calculatePositionAdvantage = function(advantagedPlayer) {

      $scope.player1.modifications = $scope.player1.modifications.filter(function(el) {
        return el.key !== "Positioning";
      });

      $scope.player2.modifications = $scope.player2.modifications.filter(function(el) {
        return el.key !== "Positioning";
      });

      if($scope.player1.range != null && $scope.player2.range != null) {

        if (advantagedPlayer == "player1") {
          $scope.player1.modifications.push({
            "key": "Positioning",
            "value": ctrl.advantage[$scope.player1.range][$scope.player2.range]
          });
          $scope.player2.modifications.push({
            "key": "Positioning",
            "value": ctrl.disadvantage[$scope.player1.range][$scope.player2.range]
          });
        }
        else if(advantagedPlayer == "player2") {
          $scope.player2.modifications.push({
            "key": "Positioning",
            "value": ctrl.advantage[$scope.player2.range][$scope.player1.range]
          });
          $scope.player1.modifications.push({
            "key": "Positioning",
            "value": ctrl.disadvantage[$scope.player2.range][$scope.player1.range]
          });
        }
      }
    };

    $scope.update = function() {

      console.log($scope.player2);

      if ((ctrl.p1Action === undefined) || (ctrl.p2Action === undefined)) {
        return;
      }

      // $scope.player1int = ctrl.p1Action.selected.resolveFunction(ctrl.p2Action.selected);
      // $scope.player2int = ctrl.p2Action.selected.resolveFunction(ctrl.p1Action.selected);

      $scope.player1act = ctrl.p1Action.selected;
      $scope.player2act = ctrl.p2Action.selected;
      $scope.player1int = ctrl.interactions[ctrl.p1Action.selected.name][ctrl.p2Action.selected.name];
      $scope.player2int = ctrl.interactions[ctrl.p2Action.selected.name][ctrl.p1Action.selected.name];

    };

    $scope.isShowableInfo = function(key) {

      if (key.match("id:|name|category|id"))
        return false;
      else
        return true;
    };

  }]);
