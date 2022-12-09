var app = angular.module('creativeGHApp' , ['ngRoute' , 'ngAnimate']);
app.controller('creativeGHController', function($scope , $http){
  $http.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
    console.log(response)
    $scope.photos = response.data;
  }).catch(function(err){
    console.log("Something went wrong")
  });
});