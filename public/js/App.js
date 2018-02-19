// creation uses a 2nd array argument to import dependencies
angular.module("App", ["ngRoute"]);

// retrieval has only one argument
angular
  .module("App")

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
      })
      .when("/users", {
        controller: "UsersController",
        templateUrl: "/views/users.html"
      })
      .when("/messages", {
        controller: "MessagesController",
        templateUrl: "/views/other.html"
      });
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
