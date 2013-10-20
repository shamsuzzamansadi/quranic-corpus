from django.conf.urls import patterns, url
from morphology import views

urlpatterns = patterns(
  '',
  url(r'^segments/(?P<segment_id>\d+)$', views.quran_segment_by_id,
      name='quran_segment_by_id'),
  url(r'^(?P<chapter>\d+)/segments$', views.quran_segments_by_chapter,
      name='quran_segments_by_chapter'),
  url(r'^$', views.index, name='index'),
)
