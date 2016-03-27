//Use to instantiate app, connect factory & controllers and configure app.
 angular.module('myBlogApp', [ 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider   
 .when('/home', {
    templateUrl: 'views/home.html',
    controller: "controllers",
 })
  
 .when('/newpost', {
    templateUrl : 'views/newpost.html',
})
    
 .when('/about', {
     templateUrl : 'views/about.html',
    controller: "postController",
})
 .otherwise({
      redirectTo: '/home'
   
    })
}]);
