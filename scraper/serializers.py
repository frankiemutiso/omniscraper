from rest_framework import serializers
from .models import TwitterVideo, VideoTag


class TwitterVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = ['id', "flagged", "parent_tweet_id", "slug", "url"]


class VideoTagSerializer(serializers.ModelSerializer):
    twitter_videos = TwitterVideoSerializer(many=True, read_only=True)

    class Meta:
        model = VideoTag
        fields = ["id", "tag_name", "description", "twitter_videos"]
        extra_kwargs = {"description": {"required":  False},
                        "twitter_videos": {"required":  False}}
