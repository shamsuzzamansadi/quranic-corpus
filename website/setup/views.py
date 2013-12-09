from os import path
from django.http import HttpResponse
from website import settings
import MySQLdb


# The path to the CSV containing the tokens of the Holy Quran.
HOLY_QURAN_TOKENS_PATH = path.join(
  path.join(settings.BASE_DIR, 'static/data'), 'holy-quran-tokens.csv')
# The path to the CSV containing the segments of the Holy Quran.
HOLY_QURAN_SEGMENTS_PATH = path.join(
  path.join(settings.BASE_DIR, 'static/data'), 'holy-quran-segments.csv')


def load_tokens_table(request):
  """Load all the tokens from the Holy Quran into the database."""
  try:
    db_settings = settings.DATABASES['default']
    db = MySQLdb.connect(host=db_settings['HOST'],
                         port=int(db_settings['PORT']),
                         user=db_settings['USER'],
                         passwd=db_settings['PASSWORD'],
                         db='QuranicArabicCorpus',
                         local_infile=1)
    cursor = db.cursor()
    cursor.execute("""
delete from morphology_qurantoken;

load data local infile '%s'
into table morphology_qurantoken
fields terminated by ','
enclosed by '"'
lines terminated by '\\n'
(token_id, chapter_no, verse_no, token_no, translation, buckwalter);
""" % HOLY_QURAN_TOKENS_PATH)
    cursor.close()
    db.commit()
    db.close()
    return HttpResponse(
      'Morphology data successfully load into memory database.')
  except Exception as e:
    return HttpResponse(
      'Failed to load morphology data into memory database.\n' + e.message)

def load_segments_table(request):
  """Load all the segments from the Holy Quran into the database."""
  try:
    db_settings = settings.DATABASES['default']
    db = MySQLdb.connect(host=db_settings['HOST'],
                         port=int(db_settings['PORT']),
                         user=db_settings['USER'],
                         passwd=db_settings['PASSWORD'],
                         db='QuranicArabicCorpus',
                         local_infile=1)
    cursor = db.cursor()
    cursor.execute("""
delete from morphology_quransegment;

load data local infile '%s'
into table morphology_quransegment
fields terminated by ','
enclosed by '"'
lines terminated by '\\n'
(segment_id, token_id, chapter_no, verse_no, token_no,
 segment_no, form, tag, features);  """ % HOLY_QURAN_SEGMENTS_PATH)
    cursor.close()
    db.commit()
    db.close()
    return HttpResponse(
      'Segments data successfully load into database.')
  except Exception as e:
    return HttpResponse(
      'Failed to load segments data into database.\n' + e.message)
