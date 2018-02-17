angular.module("myApp").service("TopicService", [
  "$http",
  function($http) {
    let topicArr = [];

    let getTopic = function() {
      return topicArr;
    };

    let fetchTopics = function() {
      $http.get("api/topics").then(result => {});
    };
  }
]);
