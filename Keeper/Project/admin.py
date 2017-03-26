from django.contrib import admin
from .models import Projects, SubProject
# Register your models here.

class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('name', 'date')
    search_fields = ['name', 'date']
    list_filter = ['name', 'date']
    filter_horizontal = ('users', 'groups',)

class SubProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'date')
    search_fields = ['name', 'date']
    list_filter = ['name','date']
    filter_horizontal = ('users',)

admin.site.register(Projects, ProjectsAdmin)
admin.site.register(SubProject, SubProjectAdmin)