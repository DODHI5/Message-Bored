angular.module("myApp").service("UserService", [
  "$http",
  function($http) {
    let userArr = [];

    this.getUsers = function() {
      return userArr;
    };

    this.fetchUsers = function() {
      return $http
        .get("/api/Users")
        .then(data => {
          console.log("fhksfsdhflsf", data);
          let result = data.data;

          result.forEach(element => {
            userArr.push(element);
          });
          return userArr;
        })
        .catch(err => {
          console.log(err);
        });
    };
    this.insertUsers = function(newUser) {
      return $http.post("/api/users", newUser).then(data => {
        let result = data.data;
        userArr.push(result);
      });
    };
  }
]);
