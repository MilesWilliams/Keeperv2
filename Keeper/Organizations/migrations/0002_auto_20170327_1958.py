# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-27 17:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Organizations', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='organizations',
            name='organization_owner',
        ),
        migrations.RemoveField(
            model_name='users',
            name='organizations',
        ),
        migrations.AddField(
            model_name='groups',
            name='organizations',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Organization', to='Organizations.Organizations'),
            preserve_default=False,
        ),
    ]