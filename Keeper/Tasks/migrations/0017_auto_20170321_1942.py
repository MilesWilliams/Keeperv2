# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-21 19:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Organizations', '0012_auto_20170321_1858'),
        ('Tasks', '0016_tasks_completed_on'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='group',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='Organizations.Groups'),
        ),
        migrations.AddField(
            model_name='tasks',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Organizations.Organizations'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tasks',
            name='users',
            field=models.ManyToManyField(blank=True, default=None, to='Organizations.Users'),
        ),
    ]
