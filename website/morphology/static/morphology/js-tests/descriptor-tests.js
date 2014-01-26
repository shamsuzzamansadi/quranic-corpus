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


/**
 * Create a QUnit unit test that generates the description for the given segment
 * and asserts that it is equal to the given description.
 * @param {Morphology.Segment} segment The segment to generate its description.
 * @param {string} description The expected description.
 */
function createDescriptionTest(segment, description) {
  'use strict';
  var testName = 'Generate b/{0}/ ({1}) Description'.format(
      segment.form, segment.getLocationString());
  test(testName, function(assert) {
    var descriptor = new Morphology.Descriptor();
    var desc = descriptor.generateSegmentDescription(segment);
    assert.equal(desc, description);
  });
}

(function() {
  'use strict';
  var segments = [
    {
      'token_no': 1,
      'tag': 'P',
      'chapter_no': 1,
      'form': 'bi',
      'segment_id': 1001001001,
      'segment_no': 1,
      'verse_no': 1,
      'features': 'PREFIX|bi+'
    },
    {
      'token_no': 1,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'somi',
      'segment_id': 1001001002,
      'segment_no': 2,
      'verse_no': 1,
      'features': 'STEM|POS:N|LEM:{som|ROOT:smw|M|GEN'
    },
    {
      'token_no': 2,
      'tag': 'PN',
      'chapter_no': 1,
      'form': '{ll~ahi',
      'segment_id': 1001002001,
      'segment_no': 1,
      'verse_no': 1,
      'features': 'STEM|POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
    },
    {
      'token_no': 3,
      'tag': 'DET',
      'chapter_no': 1,
      'form': '{l',
      'segment_id': 1001003001,
      'segment_no': 1,
      'verse_no': 1,
      'features': 'PREFIX|Al+'
    },
    {
      'token_no': 3,
      'tag': 'ADJ',
      'chapter_no': 1,
      'form': 'r~aHoma`ni',
      'segment_id': 1001003002,
      'segment_no': 2,
      'verse_no': 1,
      'features': 'STEM|POS:ADJ|LEM:r~aHoma`n|ROOT:rHm|MS|GEN'
    },
    {
      'token_no': 4,
      'tag': 'ADJ',
      'chapter_no': 1,
      'form': 'r~aHiymi',
      'segment_id': 1001004002,
      'segment_no': 2,
      'verse_no': 1,
      'features': 'STEM|POS:ADJ|LEM:r~aHiym|ROOT:rHm|MS|GEN'
    },
    {
      'token_no': 1,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'Hamodu',
      'segment_id': 1002001002,
      'segment_no': 2,
      'verse_no': 2,
      'features': 'STEM|POS:N|LEM:Hamod|ROOT:Hmd|M|NOM'
    },
    {
      'token_no': 2,
      'tag': 'P',
      'chapter_no': 1,
      'form': 'li',
      'segment_id': 1002002001,
      'segment_no': 1,
      'verse_no': 2,
      'features': 'PREFIX|l:P+'
    },
    {
      'token_no': 2,
      'tag': 'PN',
      'chapter_no': 1,
      'form': 'l~ahi',
      'segment_id': 1002002002,
      'segment_no': 2,
      'verse_no': 2,
      'features': 'STEM|POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
    },
    {
      'token_no': 3,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'rab~i',
      'segment_id': 1002003001,
      'segment_no': 1,
      'verse_no': 2,
      'features': 'STEM|POS:N|LEM:rab~|ROOT:rbb|M|GEN'
    },
    {
      'token_no': 4,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'Ea`lamiyna',
      'segment_id': 1002004002,
      'segment_no': 2,
      'verse_no': 2,
      'features': 'STEM|POS:N|LEM:Ea`lamiyn|ROOT:Elm|MP|GEN'
    },
    {
      'token_no': 1,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'ma`liki',
      'segment_id': 1004001001,
      'segment_no': 1,
      'verse_no': 4,
      'features': 'STEM|POS:N|DER:ACT PCPL|LEM:ma`lik|ROOT:mlk|M|GEN'
    },
    {
      'token_no': 2,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'yawomi',
      'segment_id': 1004002001,
      'segment_no': 1,
      'verse_no': 4,
      'features': 'STEM|POS:N|LEM:yawom|ROOT:ywm|M|GEN'
    },
    {
      'token_no': 3,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'd~iyni',
      'segment_id': 1004003002,
      'segment_no': 2,
      'verse_no': 4,
      'features': 'STEM|POS:N|LEM:diyn|ROOT:dyn|M|GEN'
    },
    {
      'token_no': 3,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'd~iyni',
      'segment_id': 1004003002,
      'segment_no': 2,
      'verse_no': 4,
      'features': 'STEM|POS:N|LEM:diyn|ROOT:dyn|M|GEN'
    },
    {
      'token_no': 1,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': '<iy~aAka',
      'segment_id': 1005001001,
      'segment_no': 1,
      'verse_no': 5,
      'features': 'STEM|POS:PRON|LEM:<iy~aA|2MS'
    },
    {
      'token_no': 2,
      'tag': 'V',
      'chapter_no': 1,
      'form': 'naEobudu',
      'segment_id': 1005002001,
      'segment_no': 1,
      'verse_no': 5,
      'features': 'STEM|POS:V|ASP:IMPF|LEM:Eabada|ROOT:Ebd|1P'
    },
    {
      'token_no': 3,
      'tag': 'CONJ',
      'chapter_no': 1,
      'form': 'wa',
      'segment_id': 1005003001,
      'segment_no': 1,
      'verse_no': 5,
      'features': 'PREFIX|w:CONJ+'
    },
    {
      'token_no': 3,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': '<iy~aAka',
      'segment_id': 1005003002,
      'segment_no': 2,
      'verse_no': 5,
      'features': 'STEM|POS:PRON|LEM:<iy~aA|2MS'
    },
    {
      'token_no': 4,
      'tag': 'V',
      'chapter_no': 1,
      'form': 'nasotaEiynu',
      'segment_id': 1005004001,
      'segment_no': 1,
      'verse_no': 5,
      'features': 'STEM|POS:V|ASP:IMPF|FRM:X|LEM:{sotaEiynu|ROOT:Ewn|1P'
    },
    {
      'token_no': 1,
      'tag': 'V',
      'chapter_no': 1,
      'form': '{hodi',
      'segment_id': 1006001001,
      'segment_no': 1,
      'verse_no': 6,
      'features': 'STEM|POS:V|ASP:IMPV|LEM:hadaY|ROOT:hdy|2MS'
    },
    {
      'token_no': 1,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': 'naA',
      'segment_id': 1006001002,
      'segment_no': 2,
      'verse_no': 6,
      'features': 'SUFFIX|PRON:1P'
    },
    {
      'token_no': 2,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'S~ira`Ta',
      'segment_id': 1006002002,
      'segment_no': 2,
      'verse_no': 6,
      'features': 'STEM|POS:N|LEM:Sira`T|ROOT:SrT|M|ACC'
    },
    {
      'token_no': 3,
      'tag': 'ADJ',
      'chapter_no': 1,
      'form': 'musotaqiyma',
      'segment_id': 1006003002,
      'segment_no': 2,
      'verse_no': 6,
      'features': 'STEM|POS:ADJ|DER:ACT PCPL|FRM:X|' +
          'LEM:m~usotaqiym|ROOT:qwm|M|ACC'
    },
    {
      'token_no': 1,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'Sira`Ta',
      'segment_id': 1007001001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:N|LEM:Sira`T|ROOT:SrT|M|ACC'
    },
    {
      'token_no': 2,
      'tag': 'REL',
      'chapter_no': 1,
      'form': '{l~a*iyna',
      'segment_id': 1007002001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:REL|LEM:{l~a*iY|MP'
    },
    {
      'token_no': 3,
      'tag': 'V',
      'chapter_no': 1,
      'form': '>anoEamo',
      'segment_id': 1007003001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:V|ASP:PERF|FRM:IV|LEM:>anoEama|ROOT:nEm|2MS'
    },
    {
      'token_no': 3,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': 'ta',
      'segment_id': 1007003002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'SUFFIX|PRON:2MS'
    },
    {
      'token_no': 4,
      'tag': 'P',
      'chapter_no': 1,
      'form': 'Ealayo',
      'segment_id': 1007004001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:P|LEM:EalaY`'
    },
    {
      'token_no': 4,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': 'himo',
      'segment_id': 1007004002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'SUFFIX|PRON:3MP'
    },
    {
      'token_no': 5,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'gayori',
      'segment_id': 1007005001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:N|LEM:gayor|ROOT:gyr|M|GEN'
    },
    {
      'token_no': 6,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'magoDuwbi',
      'segment_id': 1007006002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'STEM|POS:N|DER:PASS PCPL|LEM:magoDuwb|ROOT:gDb|M|GEN'
    },
    {
      'token_no': 7,
      'tag': 'P',
      'chapter_no': 1,
      'form': 'Ealayo',
      'segment_id': 1007007001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'STEM|POS:P|LEM:EalaY`'
    },
    {
      'token_no': 7,
      'tag': 'PRON',
      'chapter_no': 1,
      'form': 'himo',
      'segment_id': 1007007002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'SUFFIX|PRON:3MP'
    },
    {
      'token_no': 8,
      'tag': 'CONJ',
      'chapter_no': 1,
      'form': 'wa',
      'segment_id': 1007008001,
      'segment_no': 1,
      'verse_no': 7,
      'features': 'PREFIX|w:CONJ+'
    },
    {
      'token_no': 8,
      'tag': 'NEG',
      'chapter_no': 1,
      'form': 'laA',
      'segment_id': 1007008002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'STEM|POS:NEG|LEM:laA'
    },
    {
      'token_no': 9,
      'tag': 'N',
      'chapter_no': 1,
      'form': 'D~aA^l~iyna',
      'segment_id': 1007009002,
      'segment_no': 2,
      'verse_no': 7,
      'features': 'STEM|POS:N|DER:ACT PCPL|LEM:DaA^l~|ROOT:Dll|MP|GEN'
    }
  ];

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

  var i;
  var document = new Morphology.Document(segments);
  for (i = 0; i < segments.length; i++) {
    createDescriptionTest(document.getSegment(i), segmentsDescriptions[i]);
  }
}());
