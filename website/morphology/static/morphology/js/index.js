/**
 * Copyright (C) Quranic Arabic Corpus, 2014.
 * Rafid K. Abdullah, rafidka@gmail.com (Developer of this file)
 * Kais Dukes, sckd@leeds.ac.uk (Original developer of Quranic Arabic Corpus)
 *
 * This file is part of the Quranic Arabic Corpus.
 *
 * This is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This software is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * the Quranic Arabic Corpus. If not, see <http://www.gnu.org/licenses/>.
 */

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
        }, function(tokens) {
          _.forEach(tokens, function(token) {
            var descriptor = new Morphology.Descriptor();
            var document = new Morphology.Document(token.segments);
            _.forEach(token.segments, function(segment, index) {
              segment.description = descriptor.generateSegmentDescription(
                  document.getSegment(index));
            });
          });
        });
      };
    }]);
}());
