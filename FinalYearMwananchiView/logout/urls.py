from django.urls import  path
from  logout.views import logout_view
urlpatterns = [
   
    path('logout/', logout_view, name='logout'),
]