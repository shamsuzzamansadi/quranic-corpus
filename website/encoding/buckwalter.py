__unicode_to_buckwalter_map = {
  unichr(0x0621): "'",  # Hamza
  unichr(0x0622): "|",  # Alif with Madda ABOVE
  unichr(0x0623): ">",  # Alif with Hamza ABOVE
  unichr(0x0624): "&",  # WAW with Hamza ABOVE
  unichr(0x0625): "<",  # Alif with Hamza BELOW
  unichr(0x0626): "}",  # YEH with Hamza ABOVE
  unichr(0x0627): "A",  # Alif
  unichr(0x0628): "b",  # Ba
  unichr(0x0629): "p",  # Ta Marbuta
  unichr(0x062A): "t",  # Ta
  unichr(0x062B): "v",  # Tha
  unichr(0x062C): "j",  # Jeem
  unichr(0x062D): "H",  # Ha
  unichr(0x062E): "x",  # Kha
  unichr(0x062F): "d",  # Dal
  unichr(0x0630): "*",  # Thal
  unichr(0x0631): "r",  # Ra
  unichr(0x0632): "z",  # Zain
  unichr(0x0633): "s",  # Seen
  unichr(0x0634): "$",  # Sheen
  unichr(0x0635): "S",  # Sad
  unichr(0x0636): "D",  # DAD
  unichr(0x0637): "T",  # TAH
  unichr(0x0638): "Z",  # ZAH
  unichr(0x0639): "E",  # AIN
  unichr(0x063A): "g",  # Ghain
  unichr(0x0640): "_",  # Tatweel
  unichr(0x0641): "f",  # FEH
  unichr(0x0642): "q",  # QAF
  unichr(0x0643): "k",  # KAF
  unichr(0x0644): "l",  # LAM
  unichr(0x0645): "m",  # Meem
  unichr(0x0646): "n",  # Noon
  unichr(0x0647): "h",  # Ha
  unichr(0x0648): "w",  # WAW
  unichr(0x0649): "Y",  # Alif Maksura
  unichr(0x064A): "y",  # YEH
  unichr(0x064B): "F",  # Fathatan
  unichr(0x064C): "N",  # Dammatan
  unichr(0x064D): "K",  # Kasratan
  unichr(0x064E): "a",  # Fatha
  unichr(0x064F): "u",  # Damma
  unichr(0x0650): "i",  # Kasra
  unichr(0x0651): "~",  # Shadda
  unichr(0x0652): "o",  # Sukun
  unichr(0x0670): "`",  # Alif Khanjareeya
  unichr(0x0671): "{",  # Alif with Hamzat Wasl
  # Commenting out non-Arabic letters for now.
  # unichr(0x067E): "P",  # PEH
  # unichr(0x0686): "J",  # TCHEH
  # unichr(0x06A4): "V",  # VEH
  # unichr(0x06AF): "G",  # GAF
  unichr(0x0653): '^',  # Maddah (Extended Buckwalter)
  unichr(0x0654): '#',  # HamzaAbove (Extended Buckwalter)
  unichr(0x06DC): ':',  # Small High Seen (Extended Buckwalter)
  unichr(0x06DF): '@',  # Small High Rounded Zero (Extended Buckwalter)
  unichr(0x06E0): '"',  # Small High Upright Rectangular Zero (Extended Buckwalter)
  unichr(0x06E2): '[',  # Small High Meem Isolated Form (Extended Buckwalter)
  unichr(0x06E3): ';',  # Small Low Seen (Extended Buckwalter)
  unichr(0x06E5): ',',  # Small Waw (Extended Buckwalter)
  unichr(0x06E6): '.',  # Small Ya (Extended Buckwalter)
  unichr(0x06E8): '!',  # Small High Noon (Extended Buckwalter)
  unichr(0x06EA): '-',  # Empty Centre Low Stop (Extended Buckwalter)
  unichr(0x06EB): '+',  # Empty Centre High Stop (Extended Buckwalter)
  unichr(0x06EC): '%',  # Rounded High Stop With Filled Centre (Extended Buckwalter)
  unichr(0x06ED): ']',  # Small Low Meem (Extended Buckwalter)
  ' ': ' ',
}


# Inverse the map above to create inverse mapping.
__buckwalter_to_unicode_map = {}
for (key, value) in __unicode_to_buckwalter_map.iteritems():
   __buckwalter_to_unicode_map[value] = key


def buckwalter_char_to_unicode(c):
  """
  Converts the given Buckwalter character to unicode.

  :param c: the character to be converted.
  """
  return __buckwalter_to_unicode_map[c]


def unicode_char_to_buckwalter(c):
  """
  Converts the given Buckwalter character to unicode.

  :param c: the character to be converted.
  """
  return __unicode_to_buckwalter_map[c]


def buckwalter_to_unicode(string):
  """
  Converts the given Buckwalter string to unicode.

  :param string: The string to be converted.
  """
  return ''.join(map(buckwalter_char_to_unicode, string))


def unicode_to_buckwalter(string):
  """
  Converts the given unicode string to Buckwalter.

  :param string: The string to be converted.
  """
  return ''.join(map(unicode_char_to_buckwalter, string))
