from rest_framework import serializers
from .models import User,ResidentProfile,Prediction,CountyServices,ServiceImprovementRequest

class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields= "__all__"
class ResidentProfileSerilizer(serializers.ModelSerializer):
    class Meta:
        model=ResidentProfile
        fields= "__all__"
class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Prediction
        fields= "__all__"
        
class CountyServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model=CountyServices
        fields= "__all__"
class ServiceImprovementReequestSerializer(serializers.ModelSerializer):
    class Meta:
        model=ServiceImprovementRequest
        fields= "__all__"
