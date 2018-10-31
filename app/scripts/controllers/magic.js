'use strict';

/**
 * @ngdoc function
 * @name firestarterApp.controller:DowController
 * @description
 * # MagicWheelController
 * Controller of the firestarterApp
 */
angular.module('firestarterApp')
  .controller('MagicCtrl', ['$scope', '$http', 'MAGICWHEEL', function ($scope, $http, MAGICWHEEL) {
    var ctrl = this;

    $scope.counterClockClass = "";
    $scope.clockClass = "";

    ctrl.gt = {
      "direction": 0,
      "amount": 0 
    }

    ctrl.elementList = [];
    MAGICWHEEL.element.each(function(data){ctrl.elementList.push(data)});

    ctrl.impetusList = [];
    MAGICWHEEL.impetus.each(function(data){ctrl.impetusList.push(data)});

    ctrl.originList = [];
    MAGICWHEEL.origin.each(function(data){ctrl.originList.push(data)});

    ctrl.durationList = [];
    MAGICWHEEL.duration.each(function(data){ctrl.durationList.push(data)});

    ctrl.areaList = [];
    MAGICWHEEL.area.each(function(data){ctrl.areaList.push(data)});

    ctrl.element = MAGICWHEEL.element;
    ctrl.impetus = MAGICWHEEL.impetus;
    ctrl.origin = MAGICWHEEL.origin;
    ctrl.duration = MAGICWHEEL.duration;
    ctrl.area = MAGICWHEEL.area;

    ctrl.displayElement = {};
    ctrl.displayImpetus = {};
    ctrl.displayOrigin = {};
    ctrl.displayDuration = {};
    ctrl.displayArea = {};

    $scope.update = function() {

      $scope.spellelement = (ctrl.spellElement !== undefined) ? ctrl.spellElement.selected: undefined;
      $scope.spellimpetus = (ctrl.spellImpetus !== undefined) ? ctrl.spellImpetus.selected: undefined;
      $scope.spellorigin = (ctrl.spellOrigin !== undefined) ? ctrl.spellOrigin.selected: undefined;
      $scope.spellduration = (ctrl.spellDuration !== undefined) ? ctrl.spellDuration.selected: undefined;
      $scope.spellarea = (ctrl.spellArea !== undefined) ? ctrl.spellArea.selected: undefined;

    };

    $scope.setDirection = function(direction) {
      ctrl.gt.direction = direction;

      if(direction === 0) {
        // counter clockwise
        $scope.counterClockClass = 'active';
        $scope.clockClass = '';
      } else if(direction === 1) {
        $scope.counterClockClass = '';
        $scope.clockClass = 'active';
      }

      console.log(ctrl.gt);
    }




  }]);
