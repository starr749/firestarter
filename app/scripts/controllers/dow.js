/**
 * Created by YZG7GP on 9/29/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name firestarterApp.controller:DowController
 * @description
 * # DowController
 * Controller of the firestarterApp
 */
angular.module('firestarterApp')
  .controller('DowCtrl', ['$scope', '$http', 'ACTIONS', 'INTERACTIONS', function ($scope, $http, ACTIONS, INTERACTIONS) {
    var ctrl = this;

    ctrl.actions = ACTIONS.dow;
    ctrl.interactions = INTERACTIONS.dow;

    ctrl.player1int = "";
    ctrl.player2int = "";


    $scope.update = function() {
      if( (ctrl.p1Action === undefined) || (ctrl.p2Action === undefined)){
        return;
      }

      // $scope.player1int = ctrl.p1Action.selected.resolveFunction(ctrl.p2Action.selected);
      // $scope.player2int = ctrl.p2Action.selected.resolveFunction(ctrl.p1Action.selected);

      $scope.player1act = ctrl.p1Action.selected;
      $scope.player2act = ctrl.p2Action.selected;
      $scope.player1int = ctrl.interactions[ctrl.p1Action.selected.name][ctrl.p2Action.selected.name];
      $scope.player2int = ctrl.interactions[ctrl.p2Action.selected.name][ctrl.p1Action.selected.name];


    };
  }]);
