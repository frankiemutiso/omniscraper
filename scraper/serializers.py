from rest_framework import serializers
from .models import TwitterVideo


class TwitterVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = ['id', "slug", "url", "parent_tweet_id", "flagged",
                  # "tags"
                  ]
        # extra_kwargs = {"tags": {"required": False}}
