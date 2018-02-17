angular.module("myApp").controller("TopicsController", [
  "$scope",
  "TopicService",
  function($scope, TopicService) {
    TopicService.fetchTopics();
    $scope.topics = TopicService.getTopics();
  }
]);
