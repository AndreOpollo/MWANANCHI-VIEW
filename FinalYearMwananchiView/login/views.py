from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.views import APIView

class UserLoginView(APIView):

    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        # Authenticate the user.
        user = authenticate(username=username, password=password)

        # Check if the authentication was successful.
        if user is None:
            return Response({'status': 'error', 'message': 'Invalid email or password.'})
       
        # Check if the user's account is activated.
        if not user.is_active:
            return Response({'status': 'error', 'message': 'Your account is not activated.'})

        # Log the user in.
        login(request, user)

        # Serialize the user object.
     

        # Return a successful response.
        return Response({'status': 'success', 'message': user.username})


