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

import json
from django.http import HttpResponse, Http404
from django.core import serializers
from django.shortcuts import render
from models import QuranSegment, QuranToken
from quran_info import *


def index(request):
  return render(request, 'morphology/index.html', {})


def tests(request):
  return render(request, 'morphology/tests.html')


def quran_verse_tokens(request, chapter, verse):
  chapter = int(chapter)
  verse = int(verse)
  if chapter < 1 or chapter > 114:
    return Http404()
  if verse < 1 or verse > get_verse_count(chapter):
    return Http404()
  tokens = [t.to_dict() for t in
            QuranToken.objects
                      .filter(chapter_no__exact=chapter)
                      .filter(verse_no__exact=verse)
                      .order_by('chapter_no', 'verse_no')]
  return HttpResponse(
    json.dumps(tokens),
    content_type='application/json')


def quran_verse_segments(request, chapter, verse):
  chapter = int(chapter)
  verse = int(verse)
  if chapter < 1 or chapter > 114:
    return Http404()
  if verse < 1 or verse > get_verse_count(chapter):
    return Http404()
  segments = [s.to_dict() for s in
              QuranSegment.objects.filter(chapter_no__exact=chapter)
                                  .filter(verse_no__exact=verse)]
  return HttpResponse(
    json.dumps(segments),
    content_type='application/json')


def quran_segment_by_id(request, segment_id):
  segment = QuranSegment.objects.get(pk=segment_id)
  #return HttpResponse("Hello, world. You're at the morphology index.")
  return HttpResponse(
    json.dumps(segment.to_dict()),
    content_type='application/json')


def quran_segments_by_chapter(request, chapter):
  segments = [s.to_dict() for s in QuranSegment.objects.filter(chapter_no__exact=chapter)]
  #return HttpResponse("Hello, world. You're at the morphology index.")
  return HttpResponse(
    json.dumps(segments),
    content_type='application/json')
