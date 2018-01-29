'use strict';

/**
 * @ngdoc function
 * @name burnfightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnfightApp
 */
angular.module('firestarterApp')
  .controller('FightCtrl',['$scope', '$http', 'ACTIONS', 'INTERACTIONS', function ($scope, $http, ACTIONS, INTERACTIONS) {

    var ctrl = this;

    $scope.aggressiveStance = { "name": "aggressive", "text":  "Aggressive stance grants +2D to Strike and Great " +
      "Strike. Block and Counterstrike suffer +2 Ob penalty. You may not " +
      "Avoid. If you accidently script Avoid while in aggressive stance, " +
      "you hesitate for all action."};
    $scope.neutralStance = {"name": "neutral", "text": "Neutral stance is the default. You start a fight in neutral " +
      "stance unless otherwise noted. It grants no advantage and suffers no " +
      "disadvantages." };
    $scope.defensiveStance = { "name": "defensive", "text": "Defensive stance grants +2D to Avoid, Block and " +
      "Counterstrike. Strike and Great Strike suffer a +2 Ob penalty when " +
      "performed from defensive stance."};



    $scope.player1 = {};
    $scope.player2 = {};

    ctrl.actions = ACTIONS.fight;
    ctrl.interactions = INTERACTIONS.fight;

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
