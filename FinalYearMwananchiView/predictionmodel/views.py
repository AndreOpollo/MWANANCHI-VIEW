from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import CountyServices
import joblib
import nltk
import string

class CountyServicesPredictionAPI(APIView):

    def get_services(self, county):
        # Retrieve and filter services based on the specified county
        try:
            county_services = CountyServices.objects.get(county=county)
            services = county_services.services.split(',')
        except CountyServices.DoesNotExist:
            services = None

        return services
    def preprocess(services):
        service_lower=services.lower()
        tokens=nltk.wordpunct_tokenize(service_lower)
        bog_representation=nltk.FreqDist(tokens)
        return bog_representation

    

    def predict(self, bog_representation):
        # Convert services into a string for prediction
        #services_string = ' '.join(services)

        # Load the NLP prediction model
        with open('predictionmodel/prelim_model.pkl', 'rb') as f:
            model = joblib.load(f)

        # Make predictions using the model
        predictions = model.predict(bog_representation)

        # Convert predictions to JSON format
        #predictions_json = {'predictions': predictions}
        return predictions

    def get(self, request, county):
        # Retrieve and analyze services for the specified county
        services = self.get_services(county)

        if services:
            # Make predictions for all services without looping
            predictions = self.predict(services)
            predictions_json = {'predictions': predictions}
            return Response(predictions_json, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No services found for county: ' + county}, status=status.HTTP_404_NOT_FOUND)









