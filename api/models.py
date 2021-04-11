from django.db import models
from django.contrib import admin

# Create your models here.


class Films(models.Model):
	title = models.CharField(max_length=100, default="")
	year = models.IntegerField( default=2000)
	rating = models.FloatField(default=4.3)
	posterUrl=models.CharField(max_length=100, default="")
	genres=models.CharField(max_length=100, default="")
	images=models.TextField(max_length=2000, default="")
	actors=models.CharField(max_length=100, default="")
	trailer=models.CharField(max_length=100, default="")
	director=models.IntegerField( default=1)
	plot=models.TextField(max_length=2000, default="")
	runtime=models.IntegerField( default=120)
class Persons(models.Model):
	name=models.CharField(max_length=100, default="")
	type=models.CharField(max_length=100, default="")
	movies=models.CharField(max_length=400, default="")
	description=models.TextField(max_length=2000, default="")
	image=models.CharField(max_length=300, default="")

class Watchlist(models.Model):
	user_id=models.IntegerField( default=1)
	movie_id=models.CharField(max_length=100, default="")