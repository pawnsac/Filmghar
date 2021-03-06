# Generated by Django 3.1 on 2021-04-24 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_reviews_watchlist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reviews',
            old_name='review_text',
            new_name='review',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='review_id',
        ),
        migrations.AddField(
            model_name='reviews',
            name='rating',
            field=models.FloatField(default=4.3),
        ),
    ]
