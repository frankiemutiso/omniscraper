from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('omniscraper_react.urls')),
    path('', include('scraper.urls')),
    path('admin/', admin.site.urls),
]
