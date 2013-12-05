'use strict';

/* Controllers */

angular.module('gistPage.controllers', []).
controller('HomeController', ['$scope', 'gists', function($scope, gists) {
  $scope.gists = gists;
}]).
controller('SingleController', ['$scope', '$route', 'getGist', function($scope, $route, getGist) {
  getGist($route.current.params.id).success(function (data) {
    $scope.gist = data;
  });
}]);