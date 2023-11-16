from .views import CountyServicesPredictionAPI
from django.urls import path

urlpatterns = [
    path('predictions/<county>', CountyServicesPredictionAPI.as_view(), name='predictions'),
]