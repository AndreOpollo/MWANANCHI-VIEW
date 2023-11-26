from django.shortcuts import render

from api.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db import IntegrityError
#from django.contrib.auth.tokens import password_reset_token
#from django.core.mail import send_mail
#from django.template.loader import render_to_string


class UserRegisterView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        username = request.data['username']

        if User.objects.filter(email=email).exists():
          raise IntegrityError('The email address is already in use.')

        user = User(email=email,username = username)
        user.set_password(password)
        user.save()
           # Generate activation token
        #current_site = request.get_host()
        #domain = 'http://' + current_site
        #token = password_reset_token.generate_token(user)
       # activation_url = f'{domain}/activate/{user.id}/{token}'

        # Send activation email without HTML content
        #subject = 'Activate Your Account'
        #message = f"Please click the following link to activate your account: {activation_url}"
        #send_mail(subject, message, 'no-reply@example.com', [user.email])
        return Response({'status': 'success'})
