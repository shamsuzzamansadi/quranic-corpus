(function() {
  'use strict';

  var morphologyModule = angular.module('morphologyModule', ['ngResource']);

  morphologyModule.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  morphologyModule.factory('TokensService', function($resource) {
    return $resource('/morphology/:chapter/:verse/tokens');
  });

  morphologyModule.controller('Morphology', ['$scope', 'TokensService',
    function($scope, TokensService) {
      $scope.chapters = QuranInfo.chapters;
      $scope.selectedChapter = QuranInfo.chapters[0];

      $scope.verses = _.range(1, $scope.selectedChapter.verseCount + 1);
      $scope.selectedVerse = 1;

      /**
       * Called when the selected chapter is changed.
       */
      $scope.chapterSelected = function() {
        $scope.verses = _.range(1, $scope.selectedChapter.verseCount + 1);
        $scope.selectedVerse = 1;
      };

      /**
       * Called when the selected verse is changed.
       */
      $scope.verseSelected = function() {
      };

      /**
       * Loads the tokens of the selected chapter and verse.
       */
      $scope.loadTokens = function() {
        $scope.tokens = TokensService.query({
          chapter: $scope.selectedChapter.index,
          verse: $scope.selectedVerse
        });
      };
    }]);
}());
