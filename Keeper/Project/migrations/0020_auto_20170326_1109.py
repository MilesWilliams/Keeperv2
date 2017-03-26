# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-26 09:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0019_auto_20170326_1109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='project_type',
            field=models.CharField(choices=[('General Project', 'General Project'), ('New Advertisement Account', 'Advertisement Account'), ('New Marketing Account', 'Marketing'), ('New Design', 'Design'), ('New Website', 'Website')], default='General Project', max_length=30, verbose_name='Project Type'),
        ),
    ]
