var app = angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router']);

app.filter('showAsHtml', function($sce) {
  return function(input) {
    return $sce.trustAsHtml(input);
  }
})

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: './views/modal.html',
      controller: 'LoginController'
    })
    .state('static', {
      url: '/static',
      templateUrl: './views/static_modal.html',
      controller: 'StaticModalDemoCtrl'
    })
}]);

app.controller('LoginController', function($scope) {

})

app.controller('StaticModalDemoCtrl', function($scope) {

  $scope.add = function() {
    $scope.modalBody = 'views/add.html';
    $('#exampleModal').modal('show');
  }

  $scope.detail = function() {
    $scope.modalBody = 'views/detail.html';
    $('#exampleModal').modal('show');
  }

})
