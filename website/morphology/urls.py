from django.conf.urls import patterns, url
from morphology import views

urlpatterns = patterns(
  '',
  url(r'^(?P<chapter>\d+)/segments$', views.quran_segments_by_chapter,
      name='quran_segments_by_chapter'),
  url(r'^$', views.index, name='index'),
)
