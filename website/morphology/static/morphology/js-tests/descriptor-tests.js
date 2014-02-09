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

/*global equal, MorphologyTests*/


(function() {
  'use strict';
  var segmentsDescriptions = [
    'prefixed preposition',
    'genitive masculine noun',
    'genitive proper noun',
    'prefixed determiner',
    'genitive masculine singular adjective',
    'genitive masculine singular adjective',
    'nominative masculine noun',
    'prefixed preposition',
    'genitive proper noun',
    'genitive masculine noun',
    'genitive masculine plural noun',
    'genitive masculine active participle',
    'genitive masculine noun',
    'genitive masculine noun',
    '2nd person masculine singular personal pronoun',
    '1st person plural imperfect verb',
    'prefixed conjunction',
    '2nd person masculine singular personal pronoun',
    '1st person plural (form X) imperfect verb',
    '2nd person masculine singular imperative verb',
    '1st person plural object pronoun',
    'accusative masculine noun',
    'accusative masculine (form X) active participle',
    'accusative masculine noun',
    'masculine plural relative pronoun',
    '2nd person masculine singular (form IV) perfect verb',
    'subject pronoun',
    'preposition',
    '3rd person masculine plural object pronoun',
    'genitive masculine noun',
    'genitive masculine passive participle',
    'preposition',
    '3rd person masculine plural object pronoun',
    'prefixed conjunction',
    'negative particle',
    'genitive masculine plural active participle'
  ];

  /**
   * Create a QUnit unit test that generates the description for the given
   * segment and asserts that it is equal to the given description.
   * @param {Morphology.Segment} segment The segment to generate its
   * description.
   * @param {string} description The expected description.
   */
  function createDescriptionTest(segment, description) {
    var testName = 'Generate b/{0}/ ({1}) Description'.format(
        segment.form, segment.getLocationString());
    test(testName, function(assert) {
      var descriptor = new Morphology.Descriptor();
      var desc = descriptor.generateSegmentDescription(segment);
      assert.equal(desc, description);
    });
  }

  var i;
  var document = new Morphology.Document(MorphologyTests.alfatihaSegments);
  for (i = 0; i < MorphologyTests.alfatihaSegments.length; i++) {
    createDescriptionTest(document.getSegment(i), segmentsDescriptions[i]);
  }
}());
