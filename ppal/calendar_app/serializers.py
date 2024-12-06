from rest_framework import serializers
from .models import CalendarApp

class CalendarAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarApp
        fields = ()