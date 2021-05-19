from rest_framework import serializers
from .models import TwitterVideo


class TwitterVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = ['id', 'url', 'slug', 'flagged']
