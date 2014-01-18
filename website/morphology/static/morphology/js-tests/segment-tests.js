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

test('Extract b/bi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 1,
    'tag': 'P',
    'chapter_no': 1,
    'form': 'bi',
    'segment_id': 1001001001,
    'segment_no': 1,
    'verse_no': 1,
    'features': 'PREFIX|bi+'
  });

  equal(segment.type.value, Morphology.SegmentType.Prefix);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Preposition);
});

test('Extract b/somi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 1,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'somi',
    'segment_id': 1001001002,
    'segment_no': 2,
    'verse_no': 1,
    'features': 'STEM|POS:N|LEM:{som|ROOT:smw|M|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, '{som');
  equal(segment.root, 'smw');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/{ll~ahi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 2,
    'tag': 'PN',
    'chapter_no': 1,
    'form': '{ll~ahi',
    'segment_id': 1001002001,
    'segment_no': 1,
    'verse_no': 1,
    'features': 'STEM|POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.ProperNoun);
  equal(segment.lemma, '{ll~ah');
  equal(segment.root, 'Alh');
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/{l/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 3,
    'tag': 'DET',
    'chapter_no': 1,
    'form': '{l',
    'segment_id': 1001003001,
    'segment_no': 1,
    'verse_no': 1,
    'features': 'PREFIX|Al+'
  });

  equal(segment.type.value, Morphology.SegmentType.Prefix);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Determiner);
});

test('Extract b/r~aHoma`ni/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 3,
    'tag': 'ADJ',
    'chapter_no': 1,
    'form': 'r~aHoma`ni',
    'segment_id': 1001003002,
    'segment_no': 2,
    'verse_no': 1,
    'features': 'STEM|POS:ADJ|LEM:r~aHoma`n|ROOT:rHm|MS|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Adjective);
  equal(segment.lemma, 'r~aHoma`n');
  equal(segment.root, 'rHm');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.number.value, Morphology.Number.Singular);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/r~aHiymi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 4,
    'tag': 'ADJ',
    'chapter_no': 1,
    'form': 'r~aHiymi',
    'segment_id': 1001004002,
    'segment_no': 2,
    'verse_no': 1,
    'features': 'STEM|POS:ADJ|LEM:r~aHiym|ROOT:rHm|MS|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Adjective);
  equal(segment.lemma, 'r~aHiym');
  equal(segment.root, 'rHm');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.number.value, Morphology.Number.Singular);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});
