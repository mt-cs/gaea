from django.contrib import admin
from workload.models import Workload, WorkloadStep

class WorkloadAdmin(admin.ModelAdmin):
    list_display = ('workload_name', 'run_id', 'progress', 'status')

class WorkloadStepAdmin(admin.ModelAdmin):
    list_display = ('workload', 'description', 'status')

# Register your models here.
admin.site.register(Workload, WorkloadAdmin)
admin.site.register(WorkloadStep, WorkloadStepAdmin)