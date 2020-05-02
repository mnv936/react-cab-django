# todo/serializers.py
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'email', 'password', 'driver', 'location_x', 'location_y', 'available')
        extra_kwargs = {'password': {'write_only': True, 'required':True}}

    def create(self, validated_data):
        user = UserProfile.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
