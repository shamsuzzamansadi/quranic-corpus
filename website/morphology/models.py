from django.db import models


class QuranToken(models.Model):
  """Represents a token of the Holy Quran."""
  token_id = models.IntegerField(primary_key=True)
  chapter_no = models.SmallIntegerField(db_index=True)
  verse_no = models.SmallIntegerField(db_index=True)
  token_no = models.SmallIntegerField(db_index=True)
  translation = models.CharField(max_length=100)

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
  form = models.CharField(max_length=20, db_index=True)
  tag = models.CharField(max_length=20, db_index=True)
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
      'form': self.form,
      'tag': self.tag,
      'features': self.features,
    }

  def write_to_csv(self, writer):
    writer.writerow([self.segment_id,
                     self.token_id,
                     self.chapter_no,
                     self.verse_no,
                     self.token_no,
                     self.segment_no,
                     self.form,
                     self.tag,
                     self.features])

  def read_from_csv_row(self, row):
    [self.segment_id,
     self.token_id,
     self.chapter_no,
     self.verse_no,
     self.token_no,
     self.segment_no,
     self.form,
     self.tag,
     self.features] = row

