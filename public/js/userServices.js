angular.module("App").service("UserService", [
  "$http",
  function($http) {
    let userArr = [];

    this.getUsers = function() {
      return $http
        .get("api/users")
        .then(userArr => {
          return userArr.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.getUsername = function(username) {
      return $http
        .get(`/api/users/${username}`)
        .then(user => {
          let showData = null;
          if (user.data) {
            showData = user.data;
          }
          return showData;
        })
        .catch(err => {
          console.log(err);
        });
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
