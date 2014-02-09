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

  // TODO: Instead of specifying the parameter type as Object, check whethre
  // it is possible to create a structure/dictionary type for remote segments
  // and using it here.
  /**
   * Retrieves the name of the test for the given segment.
   * @param {Object} segment The segment.
   * @return {string} The name of the test.
   * @private
   */
  function getTestName_(segment) {
    return 'Extract b/{0}/ ({1}:{2}:{3}:{4}) Features'.format(segment.form,
        segment.chapter_no, segment.verse_no, segment.token_no,
        segment.segment_no);
  }

  test(getTestName_(MorphologyTests.alfatihaSegments[0]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[0]);

    equal(segment.type.value, Morphology.SegmentType.Prefix);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Preposition);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[1]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[1]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, '{som');
    equal(segment.root, 'smw');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[2]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[2]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.ProperNoun);
    equal(segment.lemma, '{ll~ah');
    equal(segment.root, 'Alh');
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[3]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[3]);

    equal(segment.type.value, Morphology.SegmentType.Prefix);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Determiner);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[4]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[4]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Adjective);
    equal(segment.lemma, 'r~aHoma`n');
    equal(segment.root, 'rHm');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.number.value, Morphology.Number.Singular);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[5]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[5]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Adjective);
    equal(segment.lemma, 'r~aHiym');
    equal(segment.root, 'rHm');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.number.value, Morphology.Number.Singular);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[6]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[6]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, 'Hamod');
    equal(segment.root, 'Hmd');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Nominative);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[7]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[7]);

    equal(segment.type.value, Morphology.SegmentType.Prefix);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Preposition);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[8]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[8]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.ProperNoun);
    equal(segment.lemma, '{ll~ah');
    equal(segment.root, 'Alh');
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[9]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[9]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, 'rab~');
    equal(segment.root, 'rbb');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[10]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[10]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, 'Ea`lamiyn');
    equal(segment.root, 'Elm');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.number.value, Morphology.Number.Plural);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[11]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[11]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.derivation.value, Morphology.Derivation.ActiveParticiple);
    equal(segment.lemma, 'ma`lik');
    equal(segment.root, 'mlk');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[12]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[12]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, 'yawom');
    equal(segment.root, 'ywm');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });

  test(getTestName_(MorphologyTests.alfatihaSegments[13]), function() {
    var segment = new Morphology.Segment(MorphologyTests.alfatihaSegments[13]);

    equal(segment.type.value, Morphology.SegmentType.Stem);
    equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
    equal(segment.lemma, 'diyn');
    equal(segment.root, 'dyn');
    equal(segment.gender.value, Morphology.Gender.Masculine);
    equal(segment.case.value, Morphology.SegmentCase.Genitive);
  });
}());


