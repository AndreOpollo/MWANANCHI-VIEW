from django.shortcuts import render
from .models import CountyServices,Report
from rest_framework.views import APIView
from django.http import HttpResponse
import json
from django.http import JsonResponse
import requests


class CountyServiceAPIView(APIView):
    def post(self, request):
        # Validate the data
        if not request.data['county'] or not request.data['services']:
            return HttpResponse('Invalid data', status=400)

        # Create a new CountyServices object
        county_service = CountyServices()
        county_service.county = request.data['county']
        county_service.services = request.data['services']
        county_service.save()

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

