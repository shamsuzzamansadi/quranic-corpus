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

from django.db import models
from encoding.buckwalter import buckwalter_to_unicode
from encoding.phonetic import unicode_to_phonetic


class QuranToken(models.Model):
  """Represents a token of the Holy Quran."""
  token_id = models.IntegerField(primary_key=True)
  chapter_no = models.SmallIntegerField(db_index=True)
  verse_no = models.SmallIntegerField(db_index=True)
  token_no = models.SmallIntegerField(db_index=True)
  # TODO: Find the maximum number of characters needed for the translation.
  translation = models.CharField(max_length=100)
  # TODO: Find the maximum number of characters needed for Buckwalter
  # romanisation.
  buckwalter = models.CharField(max_length=100)

  #def __init__(self, token_id, *args, **kwargs):
  #  super(QuranToken, self).__init__(*args, **kwargs)
  #  self.token_id = token_id

  @property
  def location_string(self):
    """A string representing the location of the token in the Holy Quran."""
    return '(%d:%d:%d)' % (self.chapter_no, self.verse_no, self.token_no)

  def to_dict(self):
    return {
      'token_id': self.token_id,
      'chapter_no': self.chapter_no,
      'verse_no': self.verse_no,
      'token_no': self.token_no,
      'translation': self.translation,
      'buckwalter': self.buckwalter,
      # TODO: Do we need this?
      'arabic': buckwalter_to_unicode(self.buckwalter),
      # TODO: To decrease the load on the servers, it might be a good idea to
      # do this processing on the client-side!
      'phonetic': unicode_to_phonetic(buckwalter_to_unicode(self.buckwalter)),
      'segments': [s.to_dict() for s in self.segments.all().order_by('chapter_no', 'verse_no', 'token_no')]
    }

  def write_to_csv(self, writer):
    """Write the token to the given CSV writer."""
    writer.writerow([self.token_id,
                     self.chapter_no,
                     self.verse_no,
                     self.token_no,
                     self.translation])

  def read_from_csv_row(self, row):
    """Read the token from the given csv row. """
    [self.segment_id,
     self.chapter_no,
     self.verse_no,
     self.token_no,
     self.translation] = row


class QuranSegment(models.Model):
  """Represents a segment of the Holy Quran."""
  segment_id = models.BigIntegerField(primary_key=True)
  location_string = models.CharField(max_length=15)
  chapter_no = models.SmallIntegerField(db_index=True)
  verse_no = models.SmallIntegerField(db_index=True)
  token_no = models.SmallIntegerField(db_index=True)
  segment_no = models.SmallIntegerField(db_index=True)
  type = models.CharField(max_length=20, db_index=True)
  form = models.CharField(max_length=20, db_index=True)
  features = models.CharField(max_length=100, db_index=True)
  token = models.ForeignKey(QuranToken, related_name='segments')

  @property
  def location_string(self):
    """A string representing the location of the segment in the Holy Quran."""
    return '(%d:%d:%d:%d)' % (self.chapter_no,
                              self.verse_no,
                              self.token_no,
                              self.segment_no)

  def to_dict(self):
    return {
      'segment_id': self.segment_id,
      'chapter_no': self.chapter_no,
      'verse_no': self.verse_no,
      'token_no': self.token_no,
      'segment_no': self.segment_no,
      'type': self.type,
      'form': self.form,
      'features': self.features,
    }

  def write_to_csv(self, writer):
    writer.writerow([self.segment_id,
                     self.token_id,
                     self.chapter_no,
                     self.verse_no,
                     self.token_no,
                     self.segment_no,
                     self.type,
                     self.form,
                     self.features])

  def read_from_csv_row(self, row):
    [self.segment_id,
     self.token_id,
     self.chapter_no,
     self.verse_no,
     self.token_no,
     self.segment_no,
     self.type,
     self.form,
     self.features] = row

