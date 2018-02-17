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
    this.insertTopics = function(newTopic) {
      return $http.post("/api/topics", newTopic).then(data => {
        let result = data.data;
        topicArr.push(result);
      });
    };
  }
]);
