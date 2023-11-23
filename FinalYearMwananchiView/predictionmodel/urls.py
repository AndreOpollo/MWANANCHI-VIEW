
from django.urls import path
from .views import PredictionPerServiceByCountyAPI
urlpatterns = [
   path('services/<county>/', PredictionPerServiceByCountyAPI.as_view(), name='services'),
]