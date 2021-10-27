from django.shortcuts import render
from rest_framework import viewsets
from workload.serializers import WorkloadSerializer
from workload.models import Workload

# Create your views here.
class WorkloadView(viewsets.ModelViewSet):
    serializer_class = WorkloadSerializer
    queryset = Workload.objects.all()