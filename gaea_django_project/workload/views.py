from django.shortcuts import render
from django.db.models.functions import TruncDay
from django.db.models import Count
from rest_framework import viewsets
from django.http import Http404, HttpResponse, JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from workload.serializers import WorkloadSerializer, DateWorkloadSerializer
from workload.models import Workload

# Create your views here.
class WorkloadView(viewsets.ModelViewSet):
    serializer_class = WorkloadSerializer
    queryset = Workload.objects.all()

class PageHitsView(viewsets.ViewSet):
    def list(self, request):
        queryset = Workload.objects.annotate(day=TruncDay("date")).values("day").annotate(hits=Count("id"))
        serializer = DateWorkloadSerializer(queryset, many=True)
        return Response(serializer.data)