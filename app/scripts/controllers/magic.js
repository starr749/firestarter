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


    $scope.update = function() {
      if( (ctrl.p1Action === undefined) || (ctrl.p2Action === undefined)){
        return;
      }

      $scope.spellelement = ctrl.spellElement.selected;

    };




  }]);
