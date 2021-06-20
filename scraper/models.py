from django.db import models

# Create your models here.


class TwitterVideo(models.Model):
    id = models.UUIDField(primary_key=True)
    url = models.TextField(blank=True, null=True)
    date_saved_utc = models.DateTimeField()
    parent_tweet_id = models.BigIntegerField()
    slug = models.TextField(unique=True, blank=True, null=True)
    flagged = models.BooleanField(blank=True, null=True)

    class Meta:
        db_table = 'twitter_videos'
