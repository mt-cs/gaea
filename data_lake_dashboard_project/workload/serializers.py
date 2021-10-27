from rest_framework import serializers
from workload.models import Workload

class WorkloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workload
        fields = ('run_id', 'date', 'workload_name', 'tester', 'cloud_name', 'machine_type', 'platform', 'metric', 'value', 'unit', 'tags')

