angular.module("App").controller("UsersController", [
  "$scope",
  "UserService",
  function($scope, UserService) {
    $scope.UserService = UserService;
    $scope.users = [];

    UserService.getUsers()
      .then(users => {
        $scope.users = users;
      })
      .catch(err => {
        console.log(err);
      });
  }
]);
