var app = angular.module("myBlogApp.controllers",[])
app.controller("listController",['$scope',"$http", function($scope, $http){
  $scope.posts= [];
  $scope.new_post = '';
  $http.get("http://localhost:3000/api/posts/").success(function(data){
      $scope.posts = data;
  });  

}]);

app.controller("submitPostController",['$scope',"$http","postFactory", function($scope, $http, postFactory){
    
    $scope.addPost = function(){
        console.log($scope.post);
        postFactory.save($scope.post);
      
    };
       
}]);

//   $scope.addPost = function( event ) {
//       if(event.keycode == 13 ) {
//           $http.post('http://localhost:3000/api/posts/[id]', {text:$scope.new_post}).success(function(data){
              
//           });
//       }
//   }

    //     // $scope.post = postService.query(); // This is getting all the blog posts from the server. Do we need to do this on a form for composing a new one?
//     // $scope.designateID = function(postID){
//     //     $scope.currentPost = postService.get({post: postID})
//     //     .then({
//     //         if (success){
//     //         console.log('successfully labeled');   
//     //     } , else (err) {
//     //         console.log("error");
//     //     }            
//     // });
//     // };
    
    // $scope.posts = [];
    //     fullList.getItems()
    //     .success(function(serverPosts){
    //         for(var i = 0; i < serverPosts.length; i++){
    //             $scope.posts.unshift(serverPosts);
    //         }


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

