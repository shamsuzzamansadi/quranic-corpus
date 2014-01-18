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

# The following letters have different rules depending on the context in the
# ALA-LC transcription:
# Hamza
# Ta' Marbuta
#

# TODO: Use the constants from arabic_alphabet module instead of hard-coding.
# NOTE: I gradually deviated from using ALA-LC. For example, the letter Ya
# in ALA-LC is transcribed as "y", which is less intuitive than "ī". For
# example, in ALA-LC الرحيم is transcribed is "al-rahymi"; Compare that with
# "al-raḥīmi".

from StringIO import StringIO
from encoding.arabic_text import ArabicText
import arabic_alphabet

__unicode_to_phonetic_map = {
  arabic_alphabet.HAMZA: u'\'',
  arabic_alphabet.ALIF_WITH_MADDA_ABOVE: unichr(0x0100),
  arabic_alphabet.ALIF_WITH_HAMZA_ABOVE: u'\'a',
  arabic_alphabet.WAW_WITH_HAMZA_ABOVE: u'\'u',
  arabic_alphabet.ALIF_WITH_HAMZA_BELOW: u'\'i',
  arabic_alphabet.YA_WITH_HAMZA_ABOVE: u'i\'',  # Ya with Hamza ABOVE
  # NOTE: Alif doesn't seem to have transcription in ALA-LC, so I am using the
  # same one for Alif with Madda.
  arabic_alphabet.ALIF: unichr(0x0101),
  arabic_alphabet.BA: u'b',  # Ba
  arabic_alphabet.TA_MARBUTA: unichr(0x1e97),
  arabic_alphabet.TA: u't',
  arabic_alphabet.THA: unichr(0x1e6f),
  arabic_alphabet.JEEM: unichr(0x01e7),
  arabic_alphabet.HHA: unichr(0x1e25),
  arabic_alphabet.KHA: unichr(0x1e96),
  arabic_alphabet.DAL: u'd',
  arabic_alphabet.THAL: unichr(0x1e0f),
  arabic_alphabet.RA: u'r',
  arabic_alphabet.ZAY: u'z',
  arabic_alphabet.SEEN: u's',
  arabic_alphabet.SHEEN: unichr(0x0161),
  arabic_alphabet.SAD: unichr(0x1e63),
  arabic_alphabet.DAD: unichr(0x1e0d),
  arabic_alphabet.TAH: unichr(0x1e6d),
  arabic_alphabet.ZAH: unichr(0x1e93),
  arabic_alphabet.AIN: unichr(0x02bf),
  arabic_alphabet.GHAIN: unichr(0x0121),
  # Removing Tatweel in the transcription
  arabic_alphabet.TATWEEL: u'',
  arabic_alphabet.FA: u'f',
  arabic_alphabet.QAF: u'q',
  arabic_alphabet.KAF: u'k',
  arabic_alphabet.LAM: u'l',
  arabic_alphabet.MEEM: u'm',
  arabic_alphabet.NOON: u'n',
  arabic_alphabet.HA: u'h',
  arabic_alphabet.WAW: u'w',
  arabic_alphabet.ALIF_MAKSURA: unichr(0x1ef3),
  arabic_alphabet.YA: unichr(0x012b),
  arabic_alphabet.FATHATAN: u'an',   # Rafid
  arabic_alphabet.DAMMATAN: u'un',   # Rafid
  arabic_alphabet.KASRATAN: u'in',   # Rafid
  arabic_alphabet.FATHA: u'a',
  arabic_alphabet.DAMMA: u'u',
  arabic_alphabet.KASRA: u'i',
  # Shadda in ALA-LC is represented by doubling the letter.
  #arabic_alphabet.SHADDA: unichr(),  # Shadda
  # Sukon in ALA-LC doesn't have a representation in ALA-LC.
  arabic_alphabet.SUKUN: u'',  # Sukun
  # Alif Khanjariya
  unichr(0x0670): unichr(0x0101),  # Alif Khanjariya
  # TODO: Implement the transcription of Hamzat Al-Wasl
  #unichr(0x0671): unichr(),  # Alif with Hamzat Wasl
  # The following letters don't have a representation in ALA-LC.
  arabic_alphabet.HAMZAABOVE: u'',
  arabic_alphabet.SMALL_HIGH_SEEN: u'',
  arabic_alphabet.SMALL_HIGH_ROUNDED_ZERO: u'',
  arabic_alphabet.SMALL_HIGH_UPRIGHT_RECTANGULAR_ZERO_: u'',
  arabic_alphabet.SMALL_HIGH_MEEM_ISOLATED_FORM: u'',
  arabic_alphabet.SMALL_LOW_SEEN: u'',
  arabic_alphabet.SMALL_WAW: u'',
  arabic_alphabet.SMALL_YA: u'',
  arabic_alphabet.SMALL_HIGH_NOON: u'',
  arabic_alphabet.EMPTY_CENTRE_LOW_STOP: u'',
  arabic_alphabet.EMPTY_CENTRE_HIGH_STOP: u'',
  arabic_alphabet.ROUNDED_HIGH_STOP_WITH_FILLED_CENTRE: u'',
  arabic_alphabet.SMALL_LOW_MEEM: u''
}


def unicode_to_phonetic(string):
  """
  Converts the given unicode string to Buckwalter.

  :param string: The string to be converted.

  :return The phonetic representation of the string.
  """
  string_buffer = StringIO()

  arabic_text = ArabicText(string)
  pos_iter = iter(range(len(string)))
  for position in pos_iter:
    # Whitespace
    if arabic_text.is_whitespace(position):
      string_buffer.write(u' ')
      continue

    # Handle Hamza
    if arabic_text.is_hamza(position) and arabic_text.is_word_start(position):
      # Hamza at the beginning of a word is not encoded in ALA-LC.
      continue

    # Handle Ta Marbuta
    if arabic_text.is_ta_marbuta(position):
      # Ta Marbuta is transcribed as either 't' or 'h' depending on the
      # context.
      string_buffer.write(u't')
      continue

    # Handle Ta Marbuta
    if arabic_text.is_al(position) and arabic_text.is_word_start(position):
      string_buffer.write(u'al-')
      # Skip the next letter (Lam) because we already processed it.
      pos_iter.next()
      continue

    # Handle Alif with Madda
    if arabic_text.is_alif_with_madda_above(position):
      if arabic_text.is_word_start(position):
        # Alif with Madda at the beginning of a word is replaced with
        # ā
        string_buffer.write(unichr(0x0101))
      else:
        # Alif with Madda at the beginning of a word is replaced with
        # `ā
        string_buffer.write('\'' + unichr(0x0101))
      continue

    if arabic_text.is_fatha_followed_by_alif(position):
      # Treat like an Alif.
      string_buffer.write(__unicode_to_phonetic_map[arabic_alphabet.ALIF])
      pos_iter.next()
      continue

    if arabic_text.is_kasra_followed_by_ya(position):
      # Treat like a Ya
      string_buffer.write(__unicode_to_phonetic_map[arabic_alphabet.YA])
      pos_iter.next()
      continue

    if arabic_text.is_damma_followed_by_waw(position):
      # Treat like a Waw
      string_buffer.write(__unicode_to_phonetic_map[arabic_alphabet.WAW])
      pos_iter.next()
      continue

    # Handle the rest
    if arabic_text.text[position] in __unicode_to_phonetic_map:
      string_buffer.write(__unicode_to_phonetic_map[arabic_text.text[position]])

  phonetic = string_buffer.getvalue()

  # TODO: Need to ensure we close the string buffer if an exception happens
  # before we reach this statement.
  string_buffer.close()

  return phonetic

