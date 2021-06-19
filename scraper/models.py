from django.db import models
from django.utils.text import slugify
import uuid

import string
import random

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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tag_name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True,
                            max_length=250, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.tag_name)
        super(VideoTag, self).save(*args, **kwargs)

    class Meta:
        db_table = 'video_tags'

class VideoTagTwitterVideo(models.Model):
    videotag = models.ForeignKey(VideoTag, models.DO_NOTHING)
    twittervideo = models.ForeignKey(TwitterVideo, models.DO_NOTHING)

    class Meta:
        db_table = 'video_tags_twitter_videos'
        unique_together = (('videotag', 'twittervideo'),)
