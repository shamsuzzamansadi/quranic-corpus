from django.conf.urls import patterns, url
from setup import views

urlpatterns = patterns(
  '',
  url(r'^split_locations$', views.split_locations, name='split_locations'),
  url(r'^load_morphology_db$', views.load_morphology_db, name='load_morphology_db')
)
