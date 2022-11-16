var app = angular.module("MiscApp" , []);
app.controller("MiscController" , function($scope){
  $scope.links = ["Home" , "About" , "Contact" , "Products" , "Login" , "Register"]
});