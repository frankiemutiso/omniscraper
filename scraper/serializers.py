from rest_framework import serializers
from .models import TwitterVideo, VideoTag


class TwitterVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = ['id', "slug", "url", "parent_tweet_id", "flagged", "tags"]
        extra_kwargs = {"tags": {"required": False}}


class VideoTagSerializer(serializers.ModelSerializer):
    twitter_videos = TwitterVideoSerializer(many=True, read_only=True)

    class Meta:
        model = VideoTag
        fields = ["id", "tag_name", "slug", "description", "twitter_videos"]
        extra_kwargs = {"description": {"required":  False},
                        "twitter_videos": {"required":  False}}
