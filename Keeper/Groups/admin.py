from django.contrib import admin
from .models import Groups

# Register your models here.

class GroupsAdmin(admin.ModelAdmin):

    list_display = ('name',)
    search_fields = ['name']
    list_filter = ["name"]


admin.site.register(Groups, GroupsAdmin)