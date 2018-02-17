angular.module("myApp").controller("UsersController", [
  "$scope",
  "UserService",
  function($scope, UserService) {
    UserService.fetchUsers();
    $scope.users = UserService.getUsers();

    $scope.addUser = function() {
      let user = Object.assign({}, $scope.newUser);
      UserService.insertUsers(user);
      //clear inputs
      $scope.newUser.name = "";
    };
  }
]);
