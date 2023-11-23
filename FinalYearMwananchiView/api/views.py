from django.db import transaction
from django.http import JsonResponse
from rest_framework.views import APIView
from api.models import Report
import json
from django.http import HttpResponse
from .models import ServiceImprovementRequest

#class CreateCountyServiceAPI(APIView):

    #@transaction.atomic
    #def post(self, request):
      #  if request.method == 'POST':
        #    data = json.loads(request.body)
           # county = data['county_name']
            #services = data['services']

            # Validate the county name
           # if not County.objects.filter(name=county).exists():
               # return JsonResponse({'error': 'Invalid county name'}, status=400)

            # Create the county object
           # county = County.objects.create(name=county)

            # Validate and add services to the county
            #for service_name in services:
                #if not Service.objects.filter(name=service).exists():
                 #   return JsonResponse({'error': 'Invalid service: ' + service_name}, status=400)

                #service = Service.objects.get(name=service_name)
               # county.services.add(service)

            # Save the county and associated services
            #county.save()

           # return JsonResponse({'message': 'County and services created successfully'}, status=201)
        #else:
           # return JsonResponse({'error': 'Invalid request method'}, status=400)


class CountyServiceAPIView(APIView):
   def post(self, request):
        # Validate the data
        if not request.data['county'] or not request.data['service']:
            return HttpResponse('Invalid data', status=400)

        # Create a new CountyServices object
        service_improvement = ServiceImprovementRequest()
        service_improvement.service=request.data['service']
        service_improvement.county=request.data['county']
        service_improvement.save()
        #services=Service()

        #county.county_name=request.data['county_name']
        #services.service_name=request.data['service_name']


        #county_service.county = request.data['county']
        #county_service.services = request.data['services']
       # county_service.save()
        #county.save()
        #services.save()

        # Return a JSON response to the client
        return JsonResponse({'success': True})
class ReportProblemAPI(APIView):
     
     def post(self,request):
        if not request.data['description']:
             return HttpResponse('Invalid data', status=400)
        report=Report()
        report.description=request.data['description']
        report.save()
        return JsonResponse({'success': True})

