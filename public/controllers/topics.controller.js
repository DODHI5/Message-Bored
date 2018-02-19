angular.module("App").controller("TopicsController", [
  "$scope",
  "TopicService",
  function($scope, TopicService) {
    TopicService.fetchTopics();
    $scope.topics = TopicService.getTopics();

    $scope.addTopic = function() {
      let topic = Object.assign({}, $scope.newTopic);
      TopicService.insertTopics(topic);
      //clear inputs
      $scope.newTopic.name = "";
    };
  }
]);
