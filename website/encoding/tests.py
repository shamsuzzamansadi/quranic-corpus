"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'

from django.test import TestCase
from phonetic import unicode_to_phonetic


class PhonemEncodingTests(TestCase):
  def test_rafid_khalid(self):
    """
    Tests that 1 + 1 always equals 2.
    """
    rafid_khalid = u'\u0631\u0627\u0641\u062F \u062E\u0627\u0644\u062F'
    print unicode_to_phonetic(rafid_khalid)

  def test_basmala(self):
    basmala = u'\u0628\u0650\u0633\u0652\u0645\u0650 ' + \
              u'\u0671\u0644\u0644\u0651\u064E\u0647\u0650 ' + \
              u'\u0671\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0670\u0646\u0650 ' + \
              u'\u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650'
    print unicode_to_phonetic(basmala)
