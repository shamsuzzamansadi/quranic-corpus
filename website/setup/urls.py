from django.conf.urls import patterns, url
from setup import views

urlpatterns = patterns(
  '',
  url(r'^load_tokens_table$',
      views.load_tokens_table,
      name='load_tokens_table'),
  url(r'^load_segments_table$',
      views.load_segments_table,
      name='load_segments_table')
)
