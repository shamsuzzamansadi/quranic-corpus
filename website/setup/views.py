from os import path
from django.http import HttpResponse
from morphology.models import QuranSegment
from website import settings
import csv
import MySQLdb


MORPHOLOGY_V4_PATH = path.join(path.join(settings.BASE_DIR, 'static/data'),
                               'quranic-corpus-morphology-0.4.csv')
MORPHOLOGY_V5_PATH = path.join(path.join(settings.BASE_DIR, 'static/data'),
                               'quranic-corpus-morphology-0.5.csv')


def split_locations(request):
  try:
    split_morphology_location_fields()
    return HttpResponse('Location were successfully split in all rows.')
  except Exception as e:
    return HttpResponse(
      'Failed to split location fields.\n' + e.message)


def split_morphology_location_fields():
  with open(MORPHOLOGY_V4_PATH, 'r') as input_file, \
    open(MORPHOLOGY_V5_PATH, 'w') as output_file:
    csv_input_file = csv.reader(input_file, delimiter='\t')
    csv_output_file = csv.writer(output_file, delimiter='\t')

    temp_row = QuranSegment()
    for row in csv_input_file:
      temp_row.read_from_csv_row(row)
      temp_row.strip_location_braces()
      temp_row.split_location()
      temp_row.write_to_csv(csv_output_file)


def load_morphology_db(request):
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
fields terminated by '\\t'
enclosed by '"'
lines terminated by '\\n'
(location, chapter, verse, word, segment, form, tag, features);  """ % MORPHOLOGY_V5_PATH)
    cursor.close()
    db.commit()
    db.close()
    return HttpResponse(
      'Morphology data successfully load into memory database.')
  except Exception as e:
    return HttpResponse(
      'Failed to load morphology data into memory database.\n' + e.message)
