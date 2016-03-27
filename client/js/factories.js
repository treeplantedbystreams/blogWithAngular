// var app = angular.module('myBlogApp.services', ['ngResource','ngRoute']);
// app.factory('blogFactory', ['$http','$resource', function($http, $resource) {

// app.factory('photos', ['$http', function($http) {
//   return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
//          .success(function(data) {
//            return data;
//          })
//          .error(function(data) {
//            return data;
//          });
// }]);

// resolve: {
//         posts: ['$http', function($http) {
//         return $http.get('http://localhost:3000/api/posts.json')
//         .then(function(response){
//         return response.data;
//         })       
//        }]
//      }   
//   })