// //Use to instantiate app, connect factory & controllers and configure app.

// var app = angular.module('', []);

// app.config([]);

var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomePageController'
    })
    .when('/instructors', {
        templateUrl: 'blogposts.html',
        controller: 'InstructorPageController'
    })
    .when('/instructors/:id', {
        templateUrl: 'views_instructor_detail.html',
        controller: 'InstructorDetailController'
    })
    .otherwise({
        redirectTo: '/','home.html'
    });
}]);