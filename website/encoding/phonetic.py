# coding=utf-8

# The following letters have different rules depending on the context in the
# ALA-LC transcription:
# Hamza
# Ta' Marbuta
#

# TODO: Use the constants from arabic_alphabet module instead of hard-coding.

from StringIO import StringIO
from encoding.arabic_text import ArabicText

__unicode_to_phonetic_map = {
  unichr(0x0621): '\'',  # Hamza
  unichr(0x0622): unichr(0x0100),  # Alif with Madda ABOVE
  unichr(0x0623): '\'a',  # Alif with Hamza ABOVE
  unichr(0x0624): '\'u',  # Waw with Hamza ABOVE
  unichr(0x0625): '\'i',  # Alif with Hamza BELOW
  unichr(0x0626): 'i\'',  # Ya with Hamza ABOVE
  # NOTE: Alif doesn't seem to have transcription in ALA-LC, so I am using the
  # same one for Alif with Madda.
  unichr(0x0627): unichr(0x0101),  # Alif
  unichr(0x0628): 'b',  # Ba
  unichr(0x0629): unichr(0x1e97),  # Ta Marbuta
  unichr(0x062A): 't',  # Ta
  unichr(0x062B): unichr(0x1e6f),  # Tha
  unichr(0x062C): unichr(0x01e7),  # Jeem
  unichr(0x062D): unichr(0x1e25),  # Ha
  unichr(0x062E): unichr(0x1e96),  # Kha
  unichr(0x062F): 'd',  # Dal
  unichr(0x0630): unichr(0x1e0f),  # Thal
  unichr(0x0631): 'r',  # Ra
  unichr(0x0632): 'z',  # Zain
  unichr(0x0633): 's',  # Seen
  unichr(0x0634): unichr(0x0161),  # Sheen
  unichr(0x0635): unichr(0x1e63),  # Sad
  unichr(0x0636): unichr(0x1e0d),  # Dad
  unichr(0x0637): unichr(0x1e6d),  # Tah
  unichr(0x0638): unichr(0x1e93),  # Zah
  unichr(0x0639): unichr(0x02bf),  # Ain
  unichr(0x063A): unichr(0x0121),  # Ghain
  # Removing Tatweel in the transcription
  unichr(0x0640): '',  # Tatweel
  unichr(0x0641): 'f',  # Fa
  unichr(0x0642): 'q',  # Qaf
  unichr(0x0643): 'k',  # KAF
  unichr(0x0644): 'l',  # LAM
  unichr(0x0645): 'm',  # Meem
  unichr(0x0646): 'n',  # Noon
  unichr(0x0647): 'h',  # Ha
  unichr(0x0648): 'w',  # WAW
  unichr(0x0649): unichr(0x1ef3),  # Alif Maksura
  unichr(0x064A): 'w',  # YEH
  unichr(0x064B): 'an',  # Fathatan (Rafid)
  unichr(0x064C): 'un',  # Dammatan (Rafid)
  unichr(0x064D): 'in',  # Kasratan (Rafid)
  unichr(0x064E): 'a',  # Fatha
  unichr(0x064F): 'u',  # Damma
  unichr(0x0650): 'i',  # Kasra
  # Shadda in ALA-LC is represented by doubling the letter.
  #unichr(0x0651): unichr(),  # Shadda
  # Sukon in ALA-LC doesn't have a representation in ALA-LC.
  unichr(0x0652): '',  # Sukun
  # Alif Khanjariya
  unichr(0x0670): unichr(0x0101),  # Alif Khanjariya
  # TODO: Implement the transcription of Hamzat Al-Wasl
  #unichr(0x0671): unichr(),  # Alif with Hamzat Wasl
  # Commenting out non-Arabic letters for now.
  #unichr(0x067E): unichr(),  # PEH
  #unichr(0x0686): unichr(),  # TCHEH
  #unichr(0x06A4): unichr(),  # VEH
  #unichr(0x06AF): unichr(),  # GAF
  #unichr(0x0653): unichr(),  # Maddah (Extended Buckwalter)
  # The following letters don't have a representation in ALA-LC.
  #unichr(0x0654): unichr(),  # HamzaAbove (Extended Buckwalter)
  #unichr(0x06DC): unichr(),  # Small High Seen (Extended Buckwalter)
  #unichr(0x06DF): unichr(),  # Small High Rounded Zero (Extended Buckwalter)
  #unichr(0x06E0): unichr(),  # Small High Upright Rectangular Zero (Extended Buckwalter)
  #unichr(0x06E2): unichr(),  # Small High Meem Isolated Form (Extended Buckwalter)
  #unichr(0x06E3): unichr(),  # Small Low Seen (Extended Buckwalter)
  #unichr(0x06E5): unichr(),  # Small Waw (Extended Buckwalter)
  #unichr(0x06E6): unichr(),  # Small Ya (Extended Buckwalter)
  #unichr(0x06E8): unichr(),  # Small High Noon (Extended Buckwalter)
  #unichr(0x06EA): unichr(),  # Empty Centre Low Stop (Extended Buckwalter)
  #unichr(0x06EB): unichr(),  # Empty Centre High Stop (Extended Buckwalter)
  #unichr(0x06EC): unichr(),  # Rounded High Stop With Filled Centre (Extended Buckwalter)
  #unichr(0x06ED): unichr(),  # Small Low Meem (Extended Buckwalter)
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
    if arabic_text.is_al(position):
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

    # Handle the rest
    if arabic_text.text[position] in __unicode_to_phonetic_map:
      string_buffer.write(__unicode_to_phonetic_map[arabic_text.text[position]])

  phonetic = string_buffer.getvalue()

  # TODO: Need to ensure we close the string buffer if an exception happens
  # before we reach this statement.
  string_buffer.close()

  return phonetic

