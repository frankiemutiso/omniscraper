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
from .models import TwitterVideo, VideoTag
from .serializers import TwitterVideoSerializer, VideoTagSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated


def infinite_filter(request):
    limit = request.GET.get("limit")
    offset = request.GET.get("offset")

    return TwitterVideo.objects.exclude(flagged=True).order_by('-date_saved_utc')[int(offset): int(offset) + int(limit)]


def is_there_more_data(request):
    offset = request.GET.get("offset")

    if int(offset) > TwitterVideo.objects.exclude(flagged=True).count():
        return False
    return True


class LogoutAndBlacklistToken(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


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

    def patch(self, request, slug):
        video = self.get_object(slug)
        serializer = TwitterVideoSerializer(
            video, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VideoTagsList(APIView):
    def get(self, request):
        video_tags = VideoTag.objects.all().order_by("tag_name")
        serializer = VideoTagSerializer(video_tags, many=True)

        return Response({"tags": serializer.data})

    def post(self, request):
        serializer = VideoTagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VideoTagDetail(APIView):
    def get_object(self, slug):
        try:
            return VideoTag.objects.get(slug=slug).twitter_videos.all().order_by('-date_saved_utc')
        except VideoTag.DoesNotExist:
            raise Http404

    def get(self, request, slug):
        videos = self.get_object(slug)
        serializer = TwitterVideoSerializer(videos, many=True)

        return Response({"videos": serializer.data})
