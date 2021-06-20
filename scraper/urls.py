from django.conf.urls import url
from django.urls import path, include
from django.views.generic.base import RedirectView
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView)

# urlpatterns = [
#     path('', views.HomeView.as_view(), name="home"),
#     path('accounts/', include("django.contrib.auth.urls")),
#     path('report/<slug:slug>', views.flag, name='flag'),
#     path('<slug:slug>', views.download, name='download'),
#     path('favicon.ico', RedirectView.as_view(
#         url=staticfiles_storage.url("favicon.ico")))
# ]

urlpatterns = {
    path('token/obtain/', TokenObtainPairView.as_view(), name="token_create"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path("blacklist/", views.LogoutAndBlacklistToken().as_view(), name="blacklist"),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url("favicon.ico"))),
    path('videos/', views.TwitterVideosList.as_view(), name="videos"),
    path('<slug:slug>', views.TwitterVideoDetail.as_view(), name="video"),
}
