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

from django.http.response import Http404
from .models import TwitterVideo
from .serializers import TwitterVideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


def infinite_filter(request):
    limit = request.GET.get("limit")
    offset = request.GET.get("offset")

    return TwitterVideo.objects.exclude(flagged=True).order_by('-date_saved_utc')[int(offset): int(offset) + int(limit)]


def is_there_more_data(request):
    offset = request.GET.get("offset")

    if int(offset) > TwitterVideo.objects.exclude(flagged=True).count():
        return False
    return True


class TwitterVideosList(APIView):
    def get(self, request):
        videos = infinite_filter(self.request)
        serializer = TwitterVideoSerializer(videos, many=True)

        return Response({
            "videos": serializer.data,
            "has_more": is_there_more_data(request)
        })


class TwitterVideoDetail(APIView):
    def get_object(self, slug):
        try:
            return TwitterVideo.objects.get(slug=slug)
        except TwitterVideo.DoesNotExist:
            raise Http404

    def get(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(video)

        return Response(serializer.data)

    def put(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(video, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
