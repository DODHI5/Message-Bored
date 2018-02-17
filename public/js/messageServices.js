angular.module("myApp").service("MessageService", [
  "$http",
  function($http) {
    let messageArr = [];

    this.getMessages = function() {
      return messageArr;
    };

    this.fetchMessages = function() {
      return $http
        .get("/api/messages")
        .then(data => {
          let result = data.data;

          result.forEach(element => {
            messageArr.push(element);
          });
          return messageArr;
        })
        .catch(err => {
          console.log(err);
        });
    };
    this.insertMessages = function(newMessage) {
      return $http.post("/api/messages", newMessage).then(data => {
        let result = data.data;
        messageArr.push(result);
      });
    };
  }
]);
