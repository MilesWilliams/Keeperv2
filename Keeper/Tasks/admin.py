from django.contrib import admin
from .models import Tasks, Images, Files

# Register your models here.

class TasksAdmin(admin.ModelAdmin):

    list_display = ('title', 'project', 'sub_project','group', 'due_date')
    search_fields = ['title', 'project', 'sub_project', 'group', ]
    list_filter = ["project", "sub_project", 'group', ]
    filter_horizontal = ('users',)

admin.site.register(Tasks, TasksAdmin)

class ImagesAdmin(admin.ModelAdmin):

    list_display = ('task', 'image_url')
    search_fields = ['task', 'image_url']
    list_filter = ['task', 'image_url']

admin.site.register(Images, ImagesAdmin)

class FilesAdmin(admin.ModelAdmin):

    list_display = ('task', 'file_url')
    search_fields = ['task', 'file_url']
    list_filter = ['task', 'file_url']

admin.site.register(Files, FilesAdmin)