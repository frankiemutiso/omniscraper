from rest_framework import serializers
from .models import TwitterVideo


class TwitterVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterVideo
        fields = '__all__'
