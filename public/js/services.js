angular.module("myApp").service("TopicService", [
  "$http",
  function($http) {
    let topicArr = [];

    this.getTopics = function() {
      return topicArr;
    };

    this.fetchTopics = function() {
      return $http
        .get("/api/topics")
        .then(data => {
          console.log("fhksfsdhflsf", data);
          let result = data.data;

          result.forEach(element => {
            topicArr.push(element);
          });
          return topicArr;
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
]);
