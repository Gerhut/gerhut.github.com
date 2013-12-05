'use strict';

/* Services */

angular.module('gistPage.services', []).
value('owner', 'Gerhut').
factory('api', ['owner', function (owner) {
  return function (path) {
    return 'https://api.github.com'
      + path.replace(new RegExp(':owner', 'ig'), owner);
  };
}]).
factory('user', ['$http', 'api', function ($http, api) {
  var user = {};
  
  $http({
    method: 'GET', 
    url: api('/users/:owner')
  }).success(function (data) {
    angular.extend(user, data);
  });
  
  return user;
}]).
factory('gists', ['$http', 'api', function ($http, api) {
  var gists = {};

  $http({
    method: 'GET',
    url: api('/users/:owner/gists')
  }).success(function (data) {
    angular.extend(gists, data);
  });

  return gists;
}]).
factory('getGist', ['$http', 'api', function ($http, api) {
  return function (id) {
    return $http({
      method: 'GET',
      url: api('/gists/' + id)
    });
  };
}]);
