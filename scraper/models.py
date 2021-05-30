from django.db import models

# Create your models here.


class TwitterVideo(models.Model):
    id = models.UUIDField(primary_key=True)
    url = models.TextField(blank=True, null=True)
    date_saved_utc = models.DateTimeField()
    parent_tweet_id = models.BigIntegerField()
    slug = models.TextField(unique=True, blank=True, null=True)
    flagged = models.BooleanField(null=True)

    class Meta:
        db_table = 'twitter_videos'


class VideoTag(models.Model):
    tag_name = models.CharField(max_length=100, unique=True)
    date_created = models.DateTimeField()
    twitter_videos = models.ManyToManyField(TwitterVideo)

    class Meta:
        db_table = 'video_tags'