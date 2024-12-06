from rest_framework import serializers
from .models import AnalyticsApp

class AnalyticsAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyticsApp
        fields = ()