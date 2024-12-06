from rest_framework import serializers
from .models import HomeApp

class HomeAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeApp
        fields = ()