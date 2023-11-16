
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.contrib.auth import get_user_model


class User(AbstractUser):
    username = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

   

    def __str__(self):
        return "{}".format(self.email)
class ResidentProfile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='profile')

    service = models.TextField(
        verbose_name='Services',
        default='',
        help_text='Enter the services you are interested in.',
        blank=True,
        null=True,
    )

    def __str__(self):
        return str(self.user)
  

    
class CountyServices(models.Model):
      
      county = models.CharField(max_length=255)
      services = models.TextField(unique=False)



      def __str__(self):
        return f'{self.county}: {self.services}'
      
      
    
    


class Report(models.Model):
     description = models.TextField(null=True,blank=True)
     def __str__(self):
        return str(self.description)

    



class Prediction(models.Model):
    prediction=models.TextField(null=True, blank=True)
      

      
