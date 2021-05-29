from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('scraper.urls')),
    path('admin/', admin.site.urls),
    path('', include('omniscraper_frontend.urls')),

]
