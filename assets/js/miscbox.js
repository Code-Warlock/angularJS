var app = angular.module("MiscApp", ["ngRoute"]);


app.controller("MiscController", function ($scope) {
  $scope.links = ["Home", "About", "Contact", "Products", "Login", "Register"];
  $scope.addlink = function (link) {
    $scope.links.push(link);
    document.forms.data.reset();
  };
  $scope.dropdown = function () {
    if ($scope.class == "remove") {
      $scope.class = "";
    } else {
      $scope.class = "remove";
    }
  };
});
