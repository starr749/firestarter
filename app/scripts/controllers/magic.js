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
    }

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
    }

    $scope.garble = function() {
      if($scope.garbleReady) {
        
        var elementId = $scope.spellelement.id;
        var impetusId = $scope.spellimpetus.id;
        var originId = $scope.spellorigin.id;
        var durationId = $scope.spellduration.id;
        var areaId = $scope.spellarea.id;

        $scope.spellelement = findItem(ctrl.element, ctrl.gt.direction, $scope.garbleAmount, elementId);
        $scope.impetusId = findItem(ctrl.impetus, ctrl.gt.direction, $scope.garbleAmount, impetusId);
        $scope.spellorigin = findItem(ctrl.origin, ctrl.gt.direction, $scope.garbleAmount, originId);
        $scope.spellduration = findItem(ctrl.duration, ctrl.gt.direction, $scope.garbleAmount, durationId);
        $scope.spellarea = findItem(ctrl.area, ctrl.gt.direction, $scope.garbleAmount, areaId);

      }
    }

    var findItem = function(linkedList, direction, amount, id) {
      // find item
      var searchItem = linkedList.first;
      var searched_flag = 0;
      while(searchItem.id !== id) {
        if(searchItem.id === linkedList.first.id) {
          searched_flag++;
        }
        if(searched_flag > 1) {
          console.log("We're looping forever");
          return;
        }
        searchItem = searchItem.next;
      }

      console.log("Found item id: " + searchItem.id);
      
      //time to rotate circle
      if(direction === 0) { //counter-clockwise
        for(i = 0; i > amount; i++) {
          searchItem = searchItem.prev;
        }
      } else if(direction === 1) { //clockwise
        for(i = 0; i > amount; i++) {
          searchItem = searchItem.next;
        }
      }

      return searchItem.data;
    }

    ctrl.validateFields = function() {
      if(ctrl.spellElement !== undefined && 
        ctrl.spellImpetus !== undefined && 
        ctrl.spellOrigin !== undefined && 
        ctrl.spellDuration !== undefined &&
        ctrl.spellArea !== undefined) {
          $scope.garbleReady = true;
        } else {
          $scope.garbleReady = false;
        }
    }


  }]);
