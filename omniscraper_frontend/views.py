from django.shortcuts import render


def index(request):
    return render(request, 'omniscraper_frontend/index.html')
