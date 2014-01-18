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

import arabic_alphabet

# TODO: Considering implementing ArabicTextIter and ArabicTextChar for easier
# and neater enumeration of ArabicText objects.

class ArabicText(unicode):
  def __init__(self, text):
    self.text = text

  def is_blank(self, index):
    return self.text[index] == ' '

  def is_word_start(self, position):
    """
    Determines whether the character at the given position is the beginning of
    a (new) word.

    :param position: The position of the character to check.

    :return True or False
    """
    return position == 0 or self.text[position - 1] == ' '

  def is_whitespace(self, position):
    return self.text[position] == ' '

  def is_hamza(self, position):
    """
    Determines whether the character at the given position is the Arabic letter
    Hamza.

    :param position: The position of the character to check.

    :return True or False
    """
    return self.text[position] == arabic_alphabet.HAMZA

  def is_ta_marbuta(self, position):
    return self.text[position] == arabic_alphabet.TA_MARBUTA

  def is_alif(self, position):
    """
    Determines whether there is an Alif or one of its variants at the given
    position.
    For now, Alif, Alif with Wasla, and Alif Khanjariya are treated similarly.

    :param position: The position of the character to check.

    :return: True or False
    """
    # TODO: Alif with Wasla is pronounced differently based on whether
    # it is connected with the previous word or not; if it is connected
    # it is pronounced like an Alif, otherwise it is pronounced like
    # an Alif with Hamza above.
    return self.text[position] == arabic_alphabet.ALIF or \
           self.text[position] == arabic_alphabet.ALIF_WITH_WASLA_ABOVE or \
           self.text[position] == arabic_alphabet.ALIF_KHANJAREEYA

  def is_al(self, position):
    """
    Determines whether there is an Alif followed by Lam at the given position.

    :param position: The position of the character to check.

    :return True or False
    """
    return position < len(self.text) - 1 and \
           self.is_alif(position) and \
           self.text[position + 1] == arabic_alphabet.LAM

  def is_fatha_followed_by_alif(self, position):
    return position < len(self.text) - 1 and \
           self.text[position] == arabic_alphabet.FATHA and \
           self.is_alif(position + 1)

  def is_kasra_followed_by_ya(self, position):
    return position < len(self.text) - 1 and \
           self.text[position] == arabic_alphabet.KASRA and \
           self.text[position + 1] == arabic_alphabet.YA

  def is_damma_followed_by_waw(self, position):
    return position < len(self.text) - 1 and \
           self.text[position] == arabic_alphabet.DAMMA and \
           self.text[position + 1] == arabic_alphabet.WAW

  def is_alif_with_madda_above(self, position):
    return self.text[position] == arabic_alphabet.ALIF_WITH_MADDA_ABOVE

