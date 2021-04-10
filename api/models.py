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
	director=models.CharField(max_length=100, default="")
	plot=models.TextField(max_length=2000, default="")
	runtime=models.IntegerField( default=120)
class Users(models.Model):
	email = models.CharField(max_length=100, default="")
	username = models.CharField(max_length=100, default="")
	password = models.CharField(max_length=100, default="")
