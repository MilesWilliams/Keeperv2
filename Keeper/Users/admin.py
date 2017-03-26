from django.contrib import admin
from .models import Users

# Register your models here.

class UsersAdmin(admin.ModelAdmin):

    list_display = ('first_name', 'last_name', 'groups')
    search_fields = ['first_name', 'last_name', 'groups']
    list_filter = ["groups"]

admin.site.register(Users, UsersAdmin)