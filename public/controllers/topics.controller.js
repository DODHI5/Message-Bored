angular.module("myApp").controller("TopicsController", [
  "$scope",
  "TopicService",
  function($scope, TopicService) {
    $scope.topics = TopicService.getTopics();
    $scope.newTopic = {
      name: "",
      created_by: ""
    };
    $scope.addTopic = function() {
      let topic = Object.assign({}, $scope.newTopic);
      TopicService.addTopic(topic);
      //clear inputs
      $scope.newTopic.name = "";
      $scope.newTopic.created_by = "";
    };
  }
]);
