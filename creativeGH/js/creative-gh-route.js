app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/home", {
      templateUrl: "../templates/masthead.html",
    })
    .when("/about", {
      templateUrl: "../templates/about.html",
    })
    .when("/services" , {
      templateUrl: "../templates/service.html",
    })
    .when("/portfolio" , {
      templateUrl: "../templates/portfolio.html",
    })
    .when("/contact" , {
      templateUrl : "../templates/contact.html",
    })
    .otherwise({redirectTo:"/home"})
    ;
});
