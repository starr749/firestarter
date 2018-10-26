'use strict';

/**
 * @ngdoc overview
 * @name firestarterApp
 * @description
 * # firestarterApp
 *
 * Main module of the application.
 */
angular
  .module('firestarterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select',
    'actions',
    'fightAdvantages',
    'magicWheel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/fight', {
        templateUrl: 'views/fight.html',
        controller: 'FightCtrl',
        controllerAs: 'fight'
      })
      .when('/dow', {
        templateUrl: 'views/dow.html',
        controller: 'DowCtrl',
        controllerAs: 'dow'
      })
      .when('/magic', {
        templateUrl: 'views/wheel.html',
        controller: 'MagicCtrl',
        controllerAs: 'magic'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
