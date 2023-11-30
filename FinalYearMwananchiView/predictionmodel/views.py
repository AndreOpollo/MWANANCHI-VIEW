
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
        with open('predictionmodel/fin_model.pkl', 'rb') as f:
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
      
class PredictionCountAPI(APIView):
     def get(self, request, county):
        service_improvement_requests = ServiceImprovementRequest.objects.filter(county=county)
        services = []
        for request in service_improvement_requests:
            services.append(request.service)

        # Analyze the services using an NLP model
        with open('predictionmodel/fin_model.pkl', 'rb') as f:
            model = joblib.load(f)
            #predictions = []
            #prediction_counts = {}
            #for service in services:
             #prediction = model.predict([service])[0]

    # Count the occurrences of the prediction
            # if prediction not in prediction_counts:
              #prediction_counts[prediction] = 0
              #prediction_counts[prediction] += 1

    # Store the prediction and count
              #predictions.append({'service':service, 'prediction': prediction, 'predictioncount': prediction_counts[prediction]})

              #return Response({
              #'predictions': predictions,
              #'prediction_counts': prediction_counts
#})

        # Analyze services one by one and make predictions
        predictions = []
        prediction_counts = {}
        for service in services:
            prediction = model.predict([service])[0]

            # Count the occurrences of the prediction
            if prediction not in prediction_counts:
               prediction_counts[prediction] = 0
            prediction_counts[prediction] += 1

            # Store the prediction and count
            predictions.append({ 'predictioncount':prediction_counts})

        # Return  prediction counts
        return Response({
            
            
          
        
            'prediction_counts': prediction_counts
        }, status=status.HTTP_200_OK)

class chartDataValuesAPI(APIView):
    def get(self, request, county,prediction_counts):
        # Retrieve the selected county from the URL parameter
        selected_county = request.GET.get('county')

        # Filter service improvement requests based on the selected county
        service_improvement_requests = ServiceImprovementRequest.objects.filter(county=selected_county)
        services = []
        for request in service_improvement_requests:
            services.append(request.service)

        # Analyze the services using an NLP model
        with open('predictionmodel/fin_model.pkl', 'rb') as f:
            model = joblib.load(f)

        # Analyze services one by one and make predictions
        predictions = []
        for service in services:
            prediction = model.predict([service])[0]

            # Combine service, prediction, and count into a dictionary
            prediction_data = {'service': service, 'prediction': prediction, 'count': prediction_counts[prediction]}

            # Add the prediction data to the predictions array
            predictions.append(prediction_data)

        # Return the predictions array
        return Response({
            'predictions': predictions
        }, status=status.HTTP_200_OK)




