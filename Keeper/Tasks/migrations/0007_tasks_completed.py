# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 20:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tasks', '0006_auto_20170315_1908'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]