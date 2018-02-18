angular.module("myApp").controller("UsersController", [
  "$scope",
  "$routeParams",
  "UserService",
  function($scope, $routeParams, UserService) {
    $scope.users = [];
    UserService.allUsers().then(users => {
      $scope.users = users;
    });

    $scope.addUser = function() {
      let user = Object.assign({}, $scope.newUser);
      UserService.createUser(user);
      //clear inputs
      $scope.newUser.name = "";
    };
  }
]);
