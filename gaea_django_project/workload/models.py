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
    image = models.CharField(max_length=50)
    family = models.CharField(max_length=30)
    network_mode = models.CharField(max_length=50)
    platform = models.CharField(max_length=100)
    metric = models.CharField(max_length=50, choices=METRIC_TYPE)
    value = models.IntegerField()
    cpu = models.CharField(max_length=10)
    tags = models.CharField(max_length=20)
    workload_url = models.CharField(max_length=250)


    def __str__(self):
        return self.workload_name

    def status(self):
        if self.workloadstep_set.filter(status='error').exists():
            return 'Error'
        elif self.workloadstep_set.filter(status='pending').exists():
            return 'In Progress'
        elif self.workloadstep_set.all().exists():
            return 'Completed'
        else:
            return 'N/A'

    def progress(self):
        try:
            done = self.workloadstep_set.filter(status='done').count()
            total = self.workloadstep_set.all().count()
            percent = int((done/total) * 100)
            return f'{percent}%'
        except Exception:
            return 'N/A'

    def progress_detail(self):
        if self.status() == 'Error':
            cancelled = self.workloadstep_set.filter(status='error').first()
            detail = [f'{cancelled.description}: {cancelled.status}']
        elif self.status() == 'In Progress':
            detail = [f'{i.description}: {i.status} ' for i in self.workloadstep_set.all()]
            detail.insert(0, self.progress())
        else:
            detail = [self.progress()]
        return detail

    # def progress_url(self):
    #     return f''


class WorkloadStep(models.Model):
    STATUS = (
        ('done', 'done'),
        ('pending', 'pending'),
        ('error', 'error'),
    )
    workload = models.ForeignKey(Workload, on_delete=models.CASCADE)
    description = models.CharField(max_length=250)
    status = models.CharField(max_length=50, choices=STATUS)

    def __str__(self):
        return self.description