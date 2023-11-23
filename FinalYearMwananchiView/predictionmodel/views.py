
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import CountyServices,ServiceImprovementRequest
import joblib
import numpy as np
from django.http import JsonResponse



#import nltk
#import string
#from sklearn.feature_extraction.text import CountVectorizer
#from sklearn.preprocessing import LabelEncoder

class PredictionPerServiceByCountyAPI(APIView):
    def get(self, request, county):
        service_improvement_requests = ServiceImprovementRequest.objects.filter(county=county)
        services = []
        for request in service_improvement_requests:
            services.append(request.service)

        # Analyze the services using an NLP model
        with open('predictionmodel/pre_model.pkl', 'rb') as f:
         model = joblib.load(f)

        # Analyze services one by one and make predictions
         predictions = []
         for service in services:
        
                prediction = model.predict([service])
                predictions.append({'service': service, 'prediction': prediction})

        return Response(predictions, status=status.HTTP_200_OK)
        #return JsonResponse({"county": county, "services": services})

    #def get(self, request, county):
        # Retrieve services based on the specified county
        #try:
           # county_services = CountyServices.objects.filter(county=county)
           # services = [service.services for service in county_services]
        #except CountyServices.DoesNotExist:
           # return Response(status=status.HTTP_404_NOT_FOUND)

        # Load the NLP model
      





