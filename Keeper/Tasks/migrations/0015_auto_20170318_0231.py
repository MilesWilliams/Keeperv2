# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-18 02:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Tasks', '0014_auto_20170318_0229'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='tasks',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='tasks',
            name='live',
        ),
    ]
