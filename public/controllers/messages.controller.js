angular.module("myApp").controller("MessagesController", [
  "$scope",
  "MessageService",
  function($scope, MessageService) {
    MessageService.fetchMessages();
    $scope.messages = MessageService.getMessages();

    $scope.addMessage = function(newMessage) {
      let message = Object.assign({}, $scope.newMessage);
      MessageService.insertMessages(message);
      //clear inputs
      $scope.newMessage.name = "";
    };
  }
]);
