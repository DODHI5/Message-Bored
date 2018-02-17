// creation uses a 2nd array argument to import dependencies
angular.module("myApp", ["ngRoute"]);

// retrieval has only one argument
angular
  .module("myApp")

  .config(function($routeProvider, $locationProvider) {
    // config

    $routeProvider
      .when("/", {
        controller: "HomeController",
        templateUrl: "/views/home.html"
      })
      .when("/topics", {
        controller: "TopicsController",
        templateUrl: "/views/topics.html"
      });
    // .when("/movies", {
    //   controller: "MoviesController",
    //   templateUrl: "/views/movies.html"
    // })
    // .when("/other", {
    //   controller: "OtherController",
    //   templateUrl: "/views/other.html"
    // })
    // .otherwise({
    //   templateUrl: "views/notfound.html"
    // });
    $locationProvider.html5Mode(true);
  })

  // .run([
  //   "APP_VERSION",
  //   "$rootScope",
  //   function(APP_VERSION, $rootScope) {
  //     // initialize
  //     $rootScope.version = APP_VERSION;
  //   }
  // ]);

  .run(function() {});
