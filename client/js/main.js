 angular.module('myBlogApp', ["ngRoute","ngResource","myBlogApp.controllers","myBlogApp.services"])
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