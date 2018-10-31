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
      "direction": 0    
    };

    $scope.garbledClass = '';

    $scope.garbleAmount = 0;

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

    $scope.garbleReady = false;

    $scope.update = function() {

      $scope.spellelement = (ctrl.spellElement !== undefined) ? ctrl.spellElement.selected: undefined;
      $scope.spellimpetus = (ctrl.spellImpetus !== undefined) ? ctrl.spellImpetus.selected: undefined;
      $scope.spellorigin = (ctrl.spellOrigin !== undefined) ? ctrl.spellOrigin.selected: undefined;
      $scope.spellduration = (ctrl.spellDuration !== undefined) ? ctrl.spellDuration.selected: undefined;
      $scope.spellarea = (ctrl.spellArea !== undefined) ? ctrl.spellArea.selected: undefined;

      $scope.garbledClass = '';

      ctrl.validateFields();
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
      console.log($scope.garbleAmount);
    };

    $scope.garble = function() {
      if($scope.garbleReady) {
        
        var elementId = $scope.spellelement.id;
        var impetusId = $scope.spellimpetus.id;
        var originId = $scope.spellorigin.id;
        var durationId = $scope.spellduration.id;
        var areaId = $scope.spellarea.id;

        $scope.spellelement = findItem(ctrl.element, ctrl.gt.direction, $scope.garbleAmount, elementId);
        $scope.spellimpetus = findItem(ctrl.impetus, ctrl.gt.direction, $scope.garbleAmount, impetusId);
        $scope.spellorigin = findItem(ctrl.origin, ctrl.gt.direction, $scope.garbleAmount, originId);
        $scope.spellduration = findItem(ctrl.duration, ctrl.gt.direction, $scope.garbleAmount, durationId);
        $scope.spellarea = findItem(ctrl.area, ctrl.gt.direction, $scope.garbleAmount, areaId);

        ctrl.spellElement.selected = $scope.spellelement;
        ctrl.spellImpetus.selected = $scope.spellimpetus;
        ctrl.spellOrigin.selected = $scope.spellorigin;
        ctrl.spellDuration.selected = $scope.spellduration;
        ctrl.spellArea.selected = $scope.spellarea;

        $scope.garbledClass = 'panel-danger';
      }
    };

    var findItem = function(linkedList, direction, amount, id) {
      var i = 0;
      var j = 0;
      // find item
      var searchNode = linkedList.first;
      console.log(searchNode);
      var searched_flag = 0;
      while(searchNode.data.id !== id) {
        if(searchNode.data.id === linkedList.first.data.id) {
          searched_flag++;
        }
        if(searched_flag > 1) {
          console.log("We're looping forever");
          return;
        }
        searchNode = searchNode.next;
      }

      console.log("Found item name: " + searchNode.data.name);

      console.log("direction: " + direction);
      //time to rotate circle
      if(direction === 0) { //counter-clockwise
        console.log("ready to rotate " + amount + " times");
        for(i = 0; i < amount; i++) {
          console.log("rotating " + i + " of " + amount + " times");
          searchNode = searchNode.prev;
        }
      } else if(direction === 1) { //clockwise
        console.log("ready to rotate " + amount + " times");
        for(j = 0; j < amount; j++) {
          console.log("rotating " + i + " of " + amount + " times");
          searchNode = searchNode.next;
        }
      }

      console.log("Finished rotating- result: " + searchNode.data.name);

      return searchNode.data;
    };

    ctrl.validateFields = function() {
      $scope.garbleReady = ctrl.spellElement !== undefined &&
        ctrl.spellImpetus !== undefined &&
        ctrl.spellOrigin !== undefined &&
        ctrl.spellDuration !== undefined &&
        ctrl.spellArea !== undefined;
    }


  }]);
