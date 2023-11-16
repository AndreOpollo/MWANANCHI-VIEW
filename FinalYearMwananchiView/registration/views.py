from django.shortcuts import render

from api.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db import IntegrityError

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

        return Response({'status': 'success'})
