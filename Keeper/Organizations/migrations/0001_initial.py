# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-21 17:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Organizations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_image', models.ImageField(blank=True, default='Images/None/no-img.gif', height_field='height_field', null=True, upload_to='Images/', verbose_name='Organization Logo', width_field='width_field')),
                ('width_field', models.IntegerField(default=0)),
                ('height_field', models.IntegerField(default=0)),
                ('name', models.CharField(default=None, max_length=150, verbose_name='Organization Name')),
                ('description', models.TextField()),
                ('created_on', models.DateField(default=django.utils.timezone.now, verbose_name='Created on')),
            ],
        ),
    ]
