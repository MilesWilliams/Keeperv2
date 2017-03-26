# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-26 09:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0020_auto_20170326_1109'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='project_status',
            field=models.CharField(choices=[('O', 'Open'), ('C', 'Contract'), ('IDF', 'Initial Design Draft'), ('CO', 'Coding'), ('SO', 'Seo Optimization'), ('M', 'Maintanence'), ('CLSD', 'Contract')], default='O', max_length=30, verbose_name='Project Status'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='project_type',
            field=models.CharField(choices=[('GP', 'General Project'), ('NAA', 'Advertisement Account'), ('MA', 'Marketing'), ('ND', 'Design'), ('NW', 'Website')], default='GP', max_length=30, verbose_name='Project Type'),
        ),
    ]