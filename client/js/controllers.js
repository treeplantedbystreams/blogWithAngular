angular.module("myBlogApp")
    .controller("controllers"['$scope',"post", "save", function($scope, post, save){
        
        $scope.title = 'title';
        $scope.author = 'author';
        $scope.post = ['title','author','content'];
    
        $scope.save = function() {
            console.log('it worked');
            // http.post('api/posts','posts'),
    
    };
    }]);
        
//     .controller("postController"['$scope', "post", function($scope, post) {
//         $scope.title = 'title';
//         $scope.author = 'author';
//         $scope.save = function() {
//             alert("hello?");
//         };
//  }]);
  

 

// angular.module('myblogApp')
// .controller('controllers', function ($scope,$http) {
//     $scope.welcome = "Welcome to the course!"
//     $scope.posts = [
//     $http.get('http://localhost:3000/api/posts').success(function(data){
//         $scope.posts = data;
//     }]);


 // $scope.title = "Home";
    // $scope.items = ["home","about","posts"];
    // $scope.posts = []; 


// var controllers = angular.module('myBlogApp');

// controllers.controller(blogPostController,['$scope','$location', function($scope,location){
//     $scope.loaded = function(){
//         $scope.oldMessages = PostFactory.query().$promise.then(function(data){
//         $scope.oldMessages = data; 
//         });
//     }
    
//     $scope.newPost = function(){
//         $location.path("/newpost")
//     }
// }])

