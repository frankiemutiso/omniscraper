# from django.shortcuts import render, redirect
# from django.views.generic.list import ListView

# from .models import TwitterVideo

# # HOME VIEW


# class HomeView(ListView):
#     # queryset = TwitterVideo.objects.exclude(url__regex=r"m3u8\?tag=\d+$")
#     queryset = TwitterVideo.objects.exclude(flagged=True)
#     context_object_name = 'videos'
#     paginate_by = 4
#     template_name = 'scraper/home.html'
#     ordering = '-date_saved_utc'


# # DOWNLOADS VIEW


# def download(request, slug):
#     try:
#         # Get the video with the given slug
#         download = TwitterVideo.objects.get(slug=slug)

#         # Get extension from the url
#         question_separated_strings = download.url.split('?')
#         stroke_separated_strings = question_separated_strings[0].split('/')
#         period_separated_strings = stroke_separated_strings[-1].split('.')
#         extension = period_separated_strings[-1]
#         link = period_separated_strings[0]

#         # Depending on extension. Provide suitable MIME Type
#         if extension == "mov":
#             mime = "video/quicktime"
#         elif extension == "m3u8":
#             mime = "application/x-mpegURL"
#         else:
#             mime = "video/mp4"

#         context = {'download': download, 'mime': mime,
#                    'extension': extension, 'link': link}

#         return render(request, 'scraper/download.html', context)
#     except Exception as error:
#         context = {'error': error}
#         return render(request, 'scraper/download.html', context)

# def flag(request, slug):
#     if request.method == 'POST':
#         flag_video = TwitterVideo.objects.get(slug=slug)
#         flag_video.flagged = True

#         flag_video.save()

#         return redirect('home')

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TwitterVideo
from .serializers import TwitterVideoSerializer


@api_view(['GET'])
def twitter_videos(request):
    if request.method == 'GET':
        videos = TwitterVideo.objects.exclude(flagged=True)
        serializer = TwitterVideoSerializer(videos, many=True)

        return Response(serializer.data)


@api_view(['GET', 'PUT'])
def twitter_video(request, slug):
    try:
        video = TwitterVideo.objects.get(slug=slug)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TwitterVideoSerializer(video)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TwitterVideoSerializer(video, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
