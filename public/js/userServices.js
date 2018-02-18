angular.module("myApp").service("UserService", [
  "$http",
  function($http) {
    this.allUsers = function() {
      return $http.get(`api/users`).then(result => {
        return result.data;
      });
    };

    this.getSingleUser = function(id) {
      return $http.get(`api/users/${id}`).then(result => {
        console.log(result);
        return result.data;
      });
    };

    this.createUser = function(username) {
      return $http.post("/api/users", username).then(result => {
        return result.data;
      });
    };
  }
]);
