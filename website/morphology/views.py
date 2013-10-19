import json
from django.http import HttpResponse
from models import QuranSegment


def index(request):
  return HttpResponse("Hello, world. You're at the morphology index.")


def quran_segments_by_chapter(request, chapter):
  segments = list(QuranSegment.objects.filter(chapter__exact=chapter))
  return HttpResponse(json.dumps(segments), content_type='application/json')
