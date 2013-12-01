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
    return position == 0 or self.text[position] == ' '

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

  def is_al(self, position):
    """
    Determines whether there is an Alif followed by Lam at the given position.

    :param position: The position of the character to check.

    :return True or False
    """
    return position < len(self.text) - 1 and\
           self.text[position] == arabic_alphabet.ALIF and\
           self.text[position] == arabic_alphabet.LAM

  def is_alif_with_madda_above(self, position):
    return self.text[position] == arabic_alphabet.ALIF_WITH_MADDA_ABOVE

