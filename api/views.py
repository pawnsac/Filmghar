from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.contrib.auth.models import User

# Create your views here.
class FilmsView(generics.ListAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	permission_classes = (AllowAny,)

class FilmsSearchView(generics.ListAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	filter_backends=[SearchFilter, OrderingFilter]
	search_fields=['title']
	permission_classes = (AllowAny,)

class FilmInfoView(generics.ListAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	filter_backends=[SearchFilter, OrderingFilter]
	search_fields=['genres']
	permission_classes = (AllowAny,)

class FeatFilmView(generics.ListAPIView):
	queryset = Films.objects.filter(id=1)|Films.objects.filter(id=2)|Films.objects.filter(id=3)
	serializer_class=FilmsSerializer
	permission_classes = (AllowAny,)

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = (AllowAny,)

class PersonsView(generics.ListAPIView):
	queryset = Persons.objects.all()
	serializer_class=PersonsSerializer
	permission_classes = (AllowAny,)

class ReviewsView(generics.ListAPIView):
	queryset = Reviews.objects.all()
	serializer_class=ReviewsSerializer
	permission_classes = (AllowAny,)

class AddReviewsView(generics.ListCreateAPIView):
	# permission_classes = [IsAuthenticated]
	queryset = Reviews.objects.all()
	serializer_class=ReviewsSerializer
	permission_classes = (AllowAny,)

class WatchlistView(generics.ListCreateAPIView):
	# permission_classes = (IsAuthenticated,)
	# authentication_classes=[TokenAuthentication]
	# permission_classes = (AllowAny,)

	queryset = Watchlist.objects.all()
	serializer_class=WatchlistSerializer

class Updaterating(generics.UpdateAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	lookup_field='id'
	# def get_object(self):
	# 	id_=self.kwrgs.get("id")
	# 	return get_object_or_404(Films, id=id_)
