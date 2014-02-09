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

/**
 * This file contains most of the segments (excluding repeated) of Surat
 * Al-Fatiha. The data are copied from the Django web service and dumped into
 * this file so that we can execute unit tests without having to make ajax
 * requests.
 *
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */
/*global equal*/

var MorphologyTests = MorphologyTests || {};


/**
 * An array containing most of the segments (excluding repeated) of Surat
 * Al-Fatiha.
 * @type {{segment_id: number,
 * segment_id: number,
 * chapter_no: number,
 * verse_no: number,
 * token_no: number,
 * segment_no: number,
 * form: string,
 * type: string,
 * features: string
 * }[]}
 */
MorphologyTests.alfatihaSegments = [
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'bi',
    'segment_id': 1001001001,
    'segment_no': 1,
    'verse_no': 1,
    'type': 'PREFIX',
    'features': 'bi+|POS:P'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'somi',
    'segment_id': 1001001002,
    'segment_no': 2,
    'verse_no': 1,
    'type': 'STEM',
    'features': 'POS:N|LEM:{som|ROOT:smw|PHI:M|GEN'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': '{ll~ahi',
    'segment_id': 1001002001,
    'segment_no': 1,
    'verse_no': 1,
    'type': 'STEM',
    'features': 'POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': '{l',
    'segment_id': 1001003001,
    'segment_no': 1,
    'verse_no': 1,
    'type': 'PREFIX',
    'features': 'Al+|POS:DET'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'r~aHoma`ni',
    'segment_id': 1001003002,
    'segment_no': 2,
    'verse_no': 1,
    'type': 'STEM',
    'features': 'POS:ADJ|LEM:r~aHoma`n|ROOT:rHm|PHI:MS|GEN'
  },
  {
    'token_no': 4,
    'chapter_no': 1,
    'form': 'r~aHiymi',
    'segment_id': 1001004002,
    'segment_no': 2,
    'verse_no': 1,
    'type': 'STEM',
    'features': 'POS:ADJ|LEM:r~aHiym|ROOT:rHm|PHI:MS|GEN'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'Hamodu',
    'segment_id': 1002001002,
    'segment_no': 2,
    'verse_no': 2,
    'type': 'STEM',
    'features': 'POS:N|LEM:Hamod|ROOT:Hmd|PHI:M|NOM'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': 'li',
    'segment_id': 1002002001,
    'segment_no': 1,
    'verse_no': 2,
    'type': 'PREFIX',
    'features': 'l:P+|POS:P'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': 'l~ahi',
    'segment_id': 1002002002,
    'segment_no': 2,
    'verse_no': 2,
    'type': 'STEM',
    'features': 'POS:PN|LEM:{ll~ah|ROOT:Alh|GEN'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'rab~i',
    'segment_id': 1002003001,
    'segment_no': 1,
    'verse_no': 2,
    'type': 'STEM',
    'features': 'POS:N|LEM:rab~|ROOT:rbb|PHI:M|GEN'
  },
  {
    'token_no': 4,
    'chapter_no': 1,
    'form': 'Ea`lamiyna',
    'segment_id': 1002004002,
    'segment_no': 2,
    'verse_no': 2,
    'type': 'STEM',
    'features': 'POS:N|LEM:Ea`lamiyn|ROOT:Elm|PHI:MP|GEN'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'ma`liki',
    'segment_id': 1004001001,
    'segment_no': 1,
    'verse_no': 4,
    'type': 'STEM',
    'features': 'POS:N|DER:ACT PCPL|LEM:ma`lik|ROOT:mlk|PHI:M|GEN'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': 'yawomi',
    'segment_id': 1004002001,
    'segment_no': 1,
    'verse_no': 4,
    'type': 'STEM',
    'features': 'POS:N|LEM:yawom|ROOT:ywm|PHI:M|GEN'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'd~iyni',
    'segment_id': 1004003002,
    'segment_no': 2,
    'verse_no': 4,
    'type': 'STEM',
    'features': 'POS:N|LEM:diyn|ROOT:dyn|PHI:M|GEN'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': '<iy~aAka',
    'segment_id': 1005001001,
    'segment_no': 1,
    'verse_no': 5,
    'type': 'STEM',
    'features': 'POS:PRON|LEM:<iy~aA|PHI:2MS'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': 'naEobudu',
    'segment_id': 1005002001,
    'segment_no': 1,
    'verse_no': 5,
    'type': 'STEM',
    'features': 'POS:V|ASP:IMPF|LEM:Eabada|ROOT:Ebd|PHI:1P'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'wa',
    'segment_id': 1005003001,
    'segment_no': 1,
    'verse_no': 5,
    'type': 'PREFIX',
    'features': 'w:CONJ+|POS:CONJ'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': '<iy~aAka',
    'segment_id': 1005003002,
    'segment_no': 2,
    'verse_no': 5,
    'type': 'STEM',
    'features': 'POS:PRON|LEM:<iy~aA|PHI:2MS'
  },
  {
    'token_no': 4,
    'chapter_no': 1,
    'form': 'nasotaEiynu',
    'segment_id': 1005004001,
    'segment_no': 1,
    'verse_no': 5,
    'type': 'STEM',
    'features': 'POS:V|ASP:IMPF|FRM:X|LEM:{sotaEiynu|ROOT:Ewn|PHI:1P'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': '{hodi',
    'segment_id': 1006001001,
    'segment_no': 1,
    'verse_no': 6,
    'type': 'STEM',
    'features': 'POS:V|ASP:IMPV|LEM:hadaY|ROOT:hdy|PHI:2MS'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'naA',
    'segment_id': 1006001002,
    'segment_no': 2,
    'verse_no': 6,
    'type': 'SUFFIX',
    'features': 'POS:PRON|PHI:1P'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': 'S~ira`Ta',
    'segment_id': 1006002002,
    'segment_no': 2,
    'verse_no': 6,
    'type': 'STEM',
    'features': 'POS:N|LEM:Sira`T|ROOT:SrT|PHI:M|ACC'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'musotaqiyma',
    'segment_id': 1006003002,
    'segment_no': 2,
    'verse_no': 6,
    'type': 'STEM',
    'features': 'POS:ADJ|DER:ACT PCPL|FRM:X|LEM:m~usotaqiym|ROOT:qwm|PHI:M|ACC'
  },
  {
    'token_no': 1,
    'chapter_no': 1,
    'form': 'Sira`Ta',
    'segment_id': 1007001001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:N|LEM:Sira`T|ROOT:SrT|PHI:M|ACC'
  },
  {
    'token_no': 2,
    'chapter_no': 1,
    'form': '{l~a*iyna',
    'segment_id': 1007002001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:REL|LEM:{l~a*iY|PHI:MP'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': '>anoEamo',
    'segment_id': 1007003001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:V|ASP:PERF|FRM:IV|LEM:>anoEama|ROOT:nEm|PHI:2MS'
  },
  {
    'token_no': 3,
    'chapter_no': 1,
    'form': 'ta',
    'segment_id': 1007003002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'SUFFIX',
    'features': 'POS:PRON|PHI:2MS'
  },
  {
    'token_no': 4,
    'chapter_no': 1,
    'form': 'Ealayo',
    'segment_id': 1007004001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:P|LEM:EalaY`'
  },
  {
    'token_no': 4,
    'chapter_no': 1,
    'form': 'himo',
    'segment_id': 1007004002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'SUFFIX',
    'features': 'POS:PRON|PHI:3MP'
  },
  {
    'token_no': 5,
    'chapter_no': 1,
    'form': 'gayori',
    'segment_id': 1007005001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:N|LEM:gayor|ROOT:gyr|PHI:M|GEN'
  },
  {
    'token_no': 6,
    'chapter_no': 1,
    'form': 'magoDuwbi',
    'segment_id': 1007006002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:N|DER:PASS PCPL|LEM:magoDuwb|ROOT:gDb|PHI:M|GEN'
  },
  {
    'token_no': 7,
    'chapter_no': 1,
    'form': 'Ealayo',
    'segment_id': 1007007001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:P|LEM:EalaY`'
  },
  {
    'token_no': 7,
    'chapter_no': 1,
    'form': 'himo',
    'segment_id': 1007007002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'SUFFIX',
    'features': 'POS:PRON|PHI:3MP'
  },
  {
    'token_no': 8,
    'chapter_no': 1,
    'form': 'wa',
    'segment_id': 1007008001,
    'segment_no': 1,
    'verse_no': 7,
    'type': 'PREFIX',
    'features': 'w:CONJ+|POS:CONJ'
  },
  {
    'token_no': 8,
    'chapter_no': 1,
    'form': 'laA',
    'segment_id': 1007008002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:NEG|LEM:laA'
  },
  {
    'token_no': 9,
    'chapter_no': 1,
    'form': 'D~aA^l~iyna',
    'segment_id': 1007009002,
    'segment_no': 2,
    'verse_no': 7,
    'type': 'STEM',
    'features': 'POS:N|DER:ACT PCPL|LEM:DaA^l~|ROOT:Dll|PHI:MP|GEN'
  }
];

