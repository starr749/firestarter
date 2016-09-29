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
    'actions'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dow', {
        templateUrl: 'views/dow.html',
        controller: 'DowCtrl',
        controllerAs: 'dow'
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
