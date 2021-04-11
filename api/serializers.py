from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class FilmsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Films
		fields = ('id','title','year','rating','posterUrl','genres','images','plot','actors','director','trailer','runtime')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
class PersonsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Persons
		fields = ('id','name','type','movies','description','image')
