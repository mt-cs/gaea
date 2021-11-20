from django.shortcuts import render
from rest_framework import viewsets
from django.http import Http404, HttpResponse, JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from workload.serializers import WorkloadSerializer
from workload.models import Workload

# Create your views here.
class WorkloadView(viewsets.ModelViewSet):
    serializer_class = WorkloadSerializer
    queryset = Workload.objects.all()
