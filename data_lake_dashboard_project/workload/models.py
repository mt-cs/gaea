from django.db import models

# Create your models here.
class Workload(models.Model):
    METRIC_TYPE = (
        ('optimal', 'optimal'),
        ('total', 'total'),
        ('rate', 'rate'),
        ('max', 'max')
    )
    run_id = models.CharField(max_length=20)
    date = models.DateField()
    workload_name = models.CharField(max_length=100)
    tester = models.CharField(max_length=50)
    cloud_name = models.CharField(max_length=30)
    machine_type = models.CharField(max_length=50)
    platform = models.CharField(max_length=100)
    metric = models.CharField(max_length=50, choices=METRIC_TYPE)
    value = models.IntegerField()
    unit = models.CharField(max_length=10)
    tags = models.CharField(max_length=20)

    def __str__(self):
        return self.workload_name