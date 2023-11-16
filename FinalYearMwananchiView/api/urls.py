from django.urls import  path
from  .views import CountyServiceAPIView, ReportProblemAPI
urlpatterns = [
   
    path('postcountyservice/', CountyServiceAPIView.as_view(), name='postcountyservice'),
    path('reportproblem/', ReportProblemAPI.as_view(), name='reportproblem'),

]