var app = angular.module("MiscApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "views/jumbotron.html",
    })
    .when("/about", {
      templateUrl: "views/about.html",
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
    }).otherwise({
      redirectTo : '/home'
    });
});

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
