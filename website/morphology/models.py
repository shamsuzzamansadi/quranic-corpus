from django.db import models


class QuranSegment(models.Model):
  location = models.CharField(max_length=15, primary_key=True)
  chapter = models.SmallIntegerField(db_index=True)
  verse = models.SmallIntegerField(db_index=True)
  word = models.SmallIntegerField(db_index=True)
  segment = models.SmallIntegerField(db_index=True)
  form = models.CharField(max_length=20, db_index=True)
  tag = models.CharField(max_length=20, db_index=True)
  features = models.CharField(max_length=100, db_index=True)

  def write_to_csv(self, writer):
    writer.writerow([self.location,
                     self.chapter,
                     self.verse,
                     self.word,
                     self.segment,
                     self.form,
                     self.tag,
                     self.features])

  def read_from_csv_row(self, row):
    [self.location,
     self.chapter,
     self.verse,
     self.word,
     self.segment,
     self.form,
     self.tag,
     self.features] = row

  def split_location(self):
    (self.chapter, self.verse, self.word, self.segment) = \
      (int(x) for x in self.location.split(':'))

  def strip_location_braces(self):
    if self.location.startswith('('):
      self.location = self.location[1:]
    if self.location.endswith(')'):
      self.location = self.location[:-1]
