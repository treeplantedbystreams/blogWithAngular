angular.module("myBlogApp")
    .controller('postController', '$scope',"posts","post","save", function($scope,posts,post,save){
        $scope.posts = [];
       
        $scope.title = 'title';
        $scope.author = 'author';
        $scope.post = ['title','author','content'];
        
        $scope.save = function() {
            console.log("hello?");
        };
      });   