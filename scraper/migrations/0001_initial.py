# Generated by Django 3.1.5 on 2021-06-15 20:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TwitterVideo',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('url', models.TextField(blank=True, null=True)),
                ('date_saved_utc', models.DateTimeField()),
                ('parent_tweet_id', models.BigIntegerField()),
                ('slug', models.TextField(blank=True, null=True, unique=True)),
                ('flagged', models.BooleanField(null=True)),
            ],
            options={
                'db_table': 'twitter_videos',
            },
        ),
        migrations.CreateModel(
            name='VideoTag',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('tag_name', models.CharField(max_length=100, unique=True)),
                ('slug', models.SlugField(blank=True, max_length=250, null=True, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('twitter_videos', models.ManyToManyField(blank=True, related_name='tags', to='scraper.TwitterVideo')),
            ],
            options={
                'db_table': 'video_tags',
            },
        ),
    ]
