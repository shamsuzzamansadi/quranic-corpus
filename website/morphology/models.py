from django.db import models


class QuranSegment(models.Model):
  segment_id = models.BigIntegerField(primary_key=True)
  location_string = models.CharField(max_length=15)
  chapter_no = models.SmallIntegerField(db_index=True)
  verse_no = models.SmallIntegerField(db_index=True)
  token_no = models.SmallIntegerField(db_index=True)
  segment_no = models.SmallIntegerField(db_index=True)
  form = models.CharField(max_length=20, db_index=True)
  tag = models.CharField(max_length=20, db_index=True)
  features = models.CharField(max_length=100, db_index=True)

  def to_dict(self):
    return {
      'segment_id': self.segment_id,
      'location_string': self.location_string,
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
                     self.location_string,
                     self.chapter_no,
                     self.verse_no,
                     self.token_no,
                     self.segment_no,
                     self.form,
                     self.tag,
                     self.features])

  def read_from_csv_row(self, row):
    [self.segment_id,
     self.location_string,
     self.chapter_no,
     self.verse_no,
     self.token_no,
     self.segment_no,
     self.form,
     self.tag,
     self.features] = row
    test = QuranSegment.get_id_from_location(self.location_string)
    self.segment_id = \
      QuranSegment.get_id_from_location(self.location_string)
    [self.chapter_no, self.verse_no, self.token_no, self.segment_no] = \
      QuranSegment.extract_location_components(self.location_string)

  @staticmethod
  def extract_location_components(location):
    if location.startswith('('):
      location = location[1:]
    if location.endswith(')'):
      location = location[:-1]
    return [int(x) for x in location.split(':')]

  @staticmethod
  def get_id_from_location(location):
    comps = QuranSegment.extract_location_components(location)
    return comps[0] * 1000000000 +\
           comps[1] * 1000000 +\
           comps[2] * 1000 +\
           comps[3]

  @staticmethod
  def get_location_from_id(segment_id):
    chapter = (segment_id / 1000000000) % 1000
    verse = (segment_id - 1000000) % 1000
    token = (segment_id / 1000) % 1000
    segment = (segment_id / 1) % 1000
    return '%d:%d:%d:%d' % (chapter, verse, token, segment)

