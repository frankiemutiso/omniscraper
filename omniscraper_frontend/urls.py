from django.urls import path, re_path
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

from . import views

urlpatterns = [
    re_path(r'^(?:.*)/?$', views.index),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url("favicon.ico"))),
]
