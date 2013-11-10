(function() {
  'use strict';

  var morphologyModule = angular.module('morphologyModule', ['ngResource']);

  morphologyModule.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  morphologyModule.factory('MorphologyService', function($resource) {
    return $resource('/morphology/:chapter/:verse/segments');
  });

  morphologyModule.controller('Morphology', ['$scope', 'MorphologyService',
    function($scope, MorphologyService) {
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
       * Loads the morphology of the selected chapter and verse.
       */
      $scope.loadMorphology = function() {
        $scope.morphologies = MorphologyService.query({
          chapter: $scope.selectedChapter.index,
          verse: $scope.selectedVerse
        });
      };
    }]);
}());
