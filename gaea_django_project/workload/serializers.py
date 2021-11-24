from rest_framework import serializers
from workload.models import Workload

class WorkloadSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    class Meta:
        model = Workload
        fields = (
            'run_id', 'date', 'workload_name', 'image', 'family', 
            'network_mode', 'platform', 'metric', 'value', 'cpu', 
            'tags','status', 'progress', 'workload_url')


    def get_progress(self, obj):
        return obj.progress_detail()

    def get_status(self, obj):
        return obj.status()

    # def get_steps(self, obj):
    #     return [i.description for i in obj.workloadstep_set.all()]

class DateWorkloadSerializer(serializers.Serializer):
    day = serializers.CharField()
    hits = serializers.IntegerField()
    