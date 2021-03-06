# Generated by Django 3.2.8 on 2021-11-24 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workload', '0005_rename_platform_workload_requirements'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workload',
            name='cpu',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='workload',
            name='family',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='workload',
            name='image',
            field=models.CharField(max_length=75),
        ),
        migrations.AlterField(
            model_name='workload',
            name='requirements',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='workload',
            name='run_id',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='workload',
            name='tags',
            field=models.CharField(max_length=10),
        ),
    ]
