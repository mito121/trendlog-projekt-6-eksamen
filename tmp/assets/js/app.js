//Angular application
var app = angular.module("trendlog_app", ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.sortable']);

//app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//    $routeProvider
//            .when('/', {
//              templateUrl: 'views/home.html',
//              controller: 'mainCtrl'
//            })
//            .when('/home', {
//              templateUrl: 'views/home.html',
//              controller: 'mainCtrl'
//            })
//            .otherwise({
//              template: '404 page not found.'
//            });
//  }]);