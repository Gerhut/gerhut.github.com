'use strict';

angular.module('gistPage', [
  'ngRoute',
  'gistPage.filters',
  'gistPage.services',
  'gistPage.directives',
  'gistPage.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/:id', {templateUrl: 'partials/single.html', controller: 'SingleController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]).
run(['$rootScope', 'user', 'gists', function($rootScope, user, gists) {
  $rootScope.user = user;
  $rootScope.gists = gists;
}]);
