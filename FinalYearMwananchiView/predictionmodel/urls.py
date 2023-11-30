
from django.urls import path
from .views import PredictionPerServiceByCountyAPI,PredictionCountAPI
urlpatterns = [
   path('services/<county>/', PredictionPerServiceByCountyAPI.as_view(), name='services'),
   path('servicenumber/<county>/', PredictionCountAPI.as_view(), name='servicenumber'),
   # path('chartvalues/<county>/', chartDataValuesAPI.as_view(), name='chartvalues')
] 