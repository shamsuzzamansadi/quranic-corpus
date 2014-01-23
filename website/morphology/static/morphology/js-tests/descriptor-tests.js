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

test('Generate b/bi/ Description', function() {
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

  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'prefixed preposition');
});

test('Generate b/somi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine noun');
});

test('Generate b/{ll~ahi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive proper noun');
});

test('Generate b/{l/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'prefixed determiner');
});

test('Generate b/{ll~ahi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine singular adjective');
});

test('Generate b/r~aHiymi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine singular adjective');
});

test('Generate b/Hamodu/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'nominative masculine noun');
});

test('Generate b/li/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'prefixed preposition');
});

test('Generate b/l~ahi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive proper noun');
});

test('Generate b/rab~i/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine noun');
});

test('Generate b/Ea`lamiyna/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine plural noun');
});

test('Generate b/ma`liki/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine active participle');
});

test('Generate b/yawomi/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine noun');
});

test('Generate b/d~iyni/ Description', function() {
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
  var descriptor = new Morphology.Descriptor();
  var desc = descriptor.generateSegmentDescription(segment);
  equal(desc, 'genitive masculine noun');
});
