# Generated by Django 3.2.8 on 2021-11-24 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workload', '0006_auto_20211124_0730'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workload',
            name='workload_name',
            field=models.CharField(max_length=50),
        ),
    ]
