# Generated by Django 3.2.8 on 2021-11-24 05:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workload', '0004_auto_20211124_0508'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workload',
            old_name='platform',
            new_name='requirements',
        ),
    ]