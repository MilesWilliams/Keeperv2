from django.contrib import admin
from .models import Projects, SubProject
# Register your models here.

class ProjectsAdmin(admin.ModelAdmin):
	list_display = ('name', 'date', 'sub_project')
	search_fields = ['name', 'date', 'sub_project']
	list_filter = ['name', 'date']

class SubProjectAdmin(admin.ModelAdmin):
	list_display = ('name', 'date')
	search_fields = ['name', 'date']
	list_filter = ['name', 'date']

admin.site.register(Projects, ProjectsAdmin)
admin.site.register(SubProject, SubProjectAdmin)