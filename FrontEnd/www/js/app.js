// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

starter.controller('MyController', function($scope, $ionicPopover, $http) {
  $scope.all = function() {
    $http.get("https://nerdeez-tuviariel.c9users.io/question/all/ id=" + $scope.id +
      "&title=" + $scope.title +
      "&description=" + $scope.description +
      "&author=" + $scope.author).success(function(response) {
      $scope.allQuestion = response.question;
    });
  }

  $scope.showInfo = function() {
    var alertPopup = $ionicPopup.alert({
      title: "Question Info",
      template: "Id: " + $scope.id + "Title: " + $scope.title + "Description: " + $scope.description + "Author: " + $scope.author
    });
  };
});