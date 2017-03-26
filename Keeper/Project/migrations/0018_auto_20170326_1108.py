# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-26 09:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0017_auto_20170326_1107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='project_type',
            field=models.CharField(choices=[('General Project', 'General Project'), ('New Advertisement Account', 'New Advertisement Account'), ('New Marketing Account', 'New Marketing'), ('New Design', 'New Design'), ('New Website', 'New Website')], default='General Project', max_length=30, verbose_name='User Type'),
        ),
    ]