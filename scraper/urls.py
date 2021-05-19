from django.conf.urls import url
from django.urls import path, include
from django.views.generic.base import RedirectView
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage

urlpatterns = [
    # path('accounts/', include("django.contrib.auth.urls")),
    path('videos/', views.twitter_videos),
    path('<slug:slug>', views.twitter_video),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url("favicon.ico")))
]
