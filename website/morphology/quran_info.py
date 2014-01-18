# coding=utf-8

#
# Copyright (C) Quranic Arabic Corpus, 2014.
# Rafid K. Abdullah, rafidka@gmail.com (Developer of this file)
# Kais Dukes, sckd@leeds.ac.uk (Original developer of Quranic Arabic Corpus)
#
# This file is part of the Quranic Arabic Corpus.
#
# This is free software: you can redistribute it and/or modify it under the
# terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later
# version.
#
# This software is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
# FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
# details.
#
# You should have received a copy of the GNU General Public License along with
# the Quranic Arabic Corpus. If not, see <http://www.gnu.org/licenses/>.
#

__all__ = [
  'get_chapter_count',
  'get_verse_count',
  'get_chapter_name_in_english',
  'get_chapter_name_transliterated'
]

__verse_counts = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111,
  110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45,
  83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55,
  78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20,
  56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21,
  11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]

__chapter_names_transliterated = [
  'sūrat l-fātiḥah',
  'sūrat l-baqarah',
  "sūrat āl ʿim'rān",
  'sūrat l-nisāa',
  'sūrat l-māidah',
  'sūrat l-anʿām',
  'sūrat l-aʿrāf',
  'sūrat l-anfāl',
  'sūrat l-tawbah',
  'sūrat yūnus',
  'sūrat hūd',
  'sūrat yūsuf',
  'sūrat l-raʿd',
  "sūrat ib'rāhīm",
  "sūrat l-ḥij'r",
  'sūrat l-naḥl',
  'sūrat l-isrā',
  'sūrat l-kahf',
  'sūrat maryam',
  'sūrat ṭā hā',
  'sūrat l-anbiyāa',
  'sūrat l-ḥaj',
  "sūrat l-mu'minūn",
  'sūrat l-nūr',
  "sūrat l-fur'qān",
  'sūrat l-shuʿarā',
  'sūrat l-naml',
  'sūrat l-qaṣaṣ',
  'sūrat l-ʿankabūt',
  'sūrat l-rūm',
  "sūrat luq'mān",
  'sūrat l-sajdah',
  'sūrat l-aḥzāb',
  'sūrat saba',
  'sūrat fāṭir',
  'sūrat yā sīn',
  'sūrat l-ṣāfāt',
  'sūrat ṣād',
  'sūrat l-zumar',
  'sūrat ghāfir',
  'sūrat fuṣṣilat',
  'sūrat l-shūrā',
  "sūrat l-zukh'ruf",
  'sūrat l-dukhān',
  'sūrat l-jāthiyah',
  'sūrat l-aḥqāf',
  'sūrat muḥammad',
  'sūrat l-fatḥ',
  'sūrat l-ḥujurāt',
  'sūrat qāf',
  'sūrat l-dhāriyāt',
  'sūrat l-ṭūr',
  'sūrat l-najm',
  'sūrat l-qamar',
  'sūrat l-raḥmān',
  'sūrat l-wāqiʿah',
  'sūrat l-ḥadīd',
  'sūrat l-mujādilah',
  'sūrat l-ḥashr',
  "sūrat l-mum'taḥanah",
  'sūrat l-ṣaf',
  'sūrat l-jumuʿah',
  'sūrat l-munāfiqūn',
  'sūrat l-taghābun',
  'sūrat l-ṭalāq',
  'sūrat l-taḥrīm',
  'sūrat l-mulk',
  'sūrat l-qalam',
  'sūrat l-ḥāqah',
  'sūrat l-maʿārij',
  'sūrat nūḥ',
  'sūrat l-jin',
  'sūrat l-muzamil',
  'sūrat l-mudathir',
  'sūrat l-qiyāmah',
  'sūrat l-insān',
  "sūrat l-mur'salāt",
  'sūrat l-naba',
  'sūrat l-nāziʿāt',
  'sūrat ʿabasa',
  'sūrat l-takwīr',
  'sūrat l-infiṭār',
  'sūrat l-muṭafifīn',
  'sūrat l-inshiqāq',
  'sūrat l-burūj',
  'sūrat l-ṭāriq',
  'sūrat l-aʿlā',
  'sūrat l-ghāshiyah',
  'sūrat l-fajr',
  'sūrat l-balad',
  'sūrat l-shams',
  'sūrat l-layl',
  'sūrat l-ḍuḥā',
  'sūrat l-sharḥ',
  'sūrat l-tīn',
  'sūrat l-ʿalaq',
  'sūrat l-qadr',
  'sūrat l-bayinah',
  'sūrat l-zalzalah',
  'sūrat l-ʿādiyāt',
  'sūrat l-qāriʿah',
  'sūrat l-takāthur',
  'sūrat l-ʿaṣr',
  'sūrat l-humazah',
  'sūrat l-fīl',
  'sūrat quraysh',
  'sūrat l-māʿūn',
  'sūrat l-kawthar',
  'sūrat l-kāfirūn',
  'sūrat l-naṣr',
  'sūrat l-masad',
  'sūrat l-ikhlāṣ',
  'sūrat l-falaq',
  'sūrat l-nās']

__chapter_names_in_english = [
  'The Opening',
  'The Cow',
  'The Family of Imrān',
  'The Women',
  'The Table spread with Food',
  'The Cattle',
  'The Heights',
  'The Spoils of War',
  'The Repentance',
  'Jonah',
  'Hud',
  'Joseph',
  'The Thunder',
  'Abraham',
  'The Rocky Tract',
  'The Bees',
  'The Night Journey',
  'The Cave',
  'Mary',
  'Ta-ha',  # Added by Rafid
  'The Prophets',
  'The Pilgrimage',
  'The Believers',
  'The Light',
  'The Criterion',
  'The Poets',
  'The Ants',
  'The Stories',
  'The Spider',
  'The Romans',
  'Luqman',  # Added by Rafid
  'The Prostration',
  'The Combined Forces',
  'Sheba',
  'The Originator)',
  'Ya Sin',  # Added by Rafid
  'Those Ranges in Ranks',
  'Sad',  # Added by Rafid
  'The Groups',
  'The Forgiver God',
  'Explained in Detail',
  'Consultation',
  'The Gold Adornment',
  'The Smoke',
  'Crouching',
  'The Curved Sand-hills',
  'Muhammad',  # Added by Rafid
  'The Victory',
  'The Dwellings',
  'Qaf',  # Added by Rafid
  'The Wind that Scatter',
  'The Mount',
  'The Star',
  'The Moon',
  'The Most Gracious',
  'The Event',
  'The Iron',
  'She That Disputeth',
  'The Gathering',
  'The Woman to be examined',
  'The Row',
  'Friday',
  'The Hypocrites',
  'Mutual Loss &amp; Gain',
  'The Divorce',
  'The Prohibition',
  'Dominion',
  'The Pen',
  'The Inevitable',
  'The Ways of Ascent',
  'Nuh/Noah',  # Added by Rafid
  'The Jinn',
  'The One wrapped in Garments',
  'The One Enveloped',
  'The Resurrection',
  'Man',
  'Those sent forth',
  'The Great News',
  'Those who Pull Out',
  'He frowned',
  'The Overthrowing)',
  'The Cleaving)',
  'Those Who Deal in Fraud',
  'The Splitting Asunder',
  'The Big Stars',
  'The Night-Comer',
  'The Most High',
  'The Overwhelming',
  'The Dawn',
  'The City',
  'The Sun',
  'The Night',
  'The Forenoon',
  'The Opening Forth)',
  'The Fig',
  'The Clot',
  'The Night of Decree',
  'The Clear Evidence',
  'The Earthquake',
  'Those That Run',
  'The Striking Hour',
  'The piling Up',
  'Time',
  'The Slanderer',
  'The Elephant',
  'Quraysh',  # Added by Rafid
  'Small Kindnesses',
  'A River in Paradise',
  'The Disbelievers',
  'The Help',
  'The Palm Fibre',
  'Sincerity',
  'The Daybreak',
  'Mankind']


def get_chapter_count():
  return 114


def get_verse_count(chapter_index):
  return __verse_counts[chapter_index]


# TODO: Implement this function
def get_token_count(chapter_no, verse_no):
  raise NotImplementedError()


def get_chapter_name_in_english(chapter_index):
  return __chapter_names_in_english[chapter_index]


def get_chapter_name_transliterated(chapter_index):
  return __chapter_names_transliterated[chapter_index]
