from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# Create your views here.
class FilmsView(generics.ListAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer

class FilmsSearchView(generics.ListAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	filter_backends=[SearchFilter, OrderingFilter]
	search_fields=['title']

class FilmInfoView(generics.RetrieveAPIView):
	queryset = Films.objects.all()
	serializer_class=FilmsSerializer
	lookuo_field='id'
	
class FeatFilmView(generics.ListAPIView):
	queryset = Films.objects.filter(id=1)|Films.objects.filter(id=2)|Films.objects.filter(id=3)
	serializer_class=FilmsSerializer
	
class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
# class PermissionView(APIView):
# 	permission_classes = [IsAuthenticated]
# 	authentication_classes = [BasicAuthentication,JSONWebTokenAuthentication]

# 	def get(self, request,format=None):
# 		data = {
# 			'username': request.user.username,
# 			'id':request.user.id
# 		}
# 		return Response(data)

