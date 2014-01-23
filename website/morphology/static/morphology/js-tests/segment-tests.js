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

/*global equal*/

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

test('Extract b/Hamodu/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 1,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'Hamodu',
    'segment_id': 1002001002,
    'segment_no': 2,
    'verse_no': 2,
    'features': 'STEM|POS:N|LEM:Hamod|ROOT:Hmd|M|NOM'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, 'Hamod');
  equal(segment.root, 'Hmd');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Nominative);
});

test('Extract b/li/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 2,
    'tag': 'P',
    'chapter_no': 1,
    'form': 'li',
    'segment_id': 1002002001,
    'segment_no': 1,
    'verse_no': 2,
    'features': 'PREFIX|l:P+'
  });

  equal(segment.type.value, Morphology.SegmentType.Prefix);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Preposition);
});

test('Extract b/l~ahi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 2,
    'tag': 'PN',
    'chapter_no': 1,
    'form': 'l~ahi',
    'segment_id': 1002002002,
    'segment_no': 2,
    'verse_no': 2,
    'features': 'STEM|POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.ProperNoun);
  equal(segment.lemma, '{ll~ah');
  equal(segment.root, 'Alh');
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/rab~i/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 3,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'rab~i',
    'segment_id': 1002003001,
    'segment_no': 1,
    'verse_no': 2,
    'features': 'STEM|POS:N|LEM:rab~|ROOT:rbb|M|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, 'rab~');
  equal(segment.root, 'rbb');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/Ea`lamiyna/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 4,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'Ea`lamiyna',
    'segment_id': 1002004002,
    'segment_no': 2,
    'verse_no': 2,
    'features': 'STEM|POS:N|LEM:Ea`lamiyn|ROOT:Elm|MP|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, 'Ea`lamiyn');
  equal(segment.root, 'Elm');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.number.value, Morphology.Number.Plural);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/ma`liki/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 1,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'ma`liki',
    'segment_id': 1004001001,
    'segment_no': 1,
    'verse_no': 4,
    'features': 'STEM|POS:N|DER:ACT PCPL|LEM:ma`lik|ROOT:mlk|M|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.derivation.value, Morphology.Derivation.ActiveParticiple);
  equal(segment.lemma, 'ma`lik');
  equal(segment.root, 'mlk');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/yawomi/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 2,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'yawomi',
    'segment_id': 1004002001,
    'segment_no': 1,
    'verse_no': 4,
    'features': 'STEM|POS:N|LEM:yawom|ROOT:ywm|M|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, 'yawom');
  equal(segment.root, 'ywm');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});

test('Extract b/d~iyni/ Features', function() {
  'use strict';
  var segment = new Morphology.Segment({
    'token_no': 3,
    'tag': 'N',
    'chapter_no': 1,
    'form': 'd~iyni',
    'segment_id': 1004003002,
    'segment_no': 2,
    'verse_no': 4,
    'features': 'STEM|POS:N|LEM:diyn|ROOT:dyn|M|GEN'
  });

  equal(segment.type.value, Morphology.SegmentType.Stem);
  equal(segment.partOfSpeech.value, Morphology.PartOfSpeeh.Noun);
  equal(segment.lemma, 'diyn');
  equal(segment.root, 'dyn');
  equal(segment.gender.value, Morphology.Gender.Masculine);
  equal(segment.case.value, Morphology.SegmentCase.Genitive);
});
