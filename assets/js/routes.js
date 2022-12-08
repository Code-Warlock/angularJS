app.config(function ($routeProvider , $locationProvider) {
  $locationProvider.html5Mode(true);
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