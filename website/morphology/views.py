import json
from django.http import HttpResponse
from django.core import serializers
from models import QuranSegment


def index(request):
  return HttpResponse("Hello, world. You're at the morphology index.")


def quran_segment_by_id(request, segment_id):
  segment = QuranSegment.objects.get(pk=segment_id)
  #return HttpResponse("Hello, world. You're at the morphology index.")
  return HttpResponse(
    json.dumps(segment.to_dict()),
    content_type='application/json')


def quran_segments_by_chapter(request, chapter):
  segments = list(QuranSegment.objects.filter(chapter_no__exact=chapter))
  #return HttpResponse("Hello, world. You're at the morphology index.")
  return HttpResponse(
    serializers.serialize('json', segments),
    content_type='application/json')
