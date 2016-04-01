 angular.module('myBlogApp', ["ngRoute","ngResource","myBlogApp.controllers","myBlogApp.services"])
//Use to instantiate app, connect factory & controllers and configure app.
 angular.module('myBlogApp', [ 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider   
 .when('/home', {
    templateUrl: 'views/home.html',
    controller: "listController",
 })
  
 .when('/newpost',{
    templateUrl : 'views/newpost.html',
    controller: "submitPostController"
 })
    
 .when('/about', {
     templateUrl : 'views/about.html',
     
 })
}]);