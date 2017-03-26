from django.contrib import admin
from .models import Organizations, Users, Groups

# Register your models here.

class OrganizationsAdmin(admin.ModelAdmin):

    list_display = ('name',)


admin.site.register(Organizations, OrganizationsAdmin)

class UsersAdmin(admin.ModelAdmin):

    list_display = ('first_name', 'last_name', 'email_address')
    search_fields = ['first_name', 'last_name']
    
    

admin.site.register(Users, UsersAdmin)

class GroupsAdmin(admin.ModelAdmin):

    list_display = ('name',)
    search_fields = ['name']
    list_filter = ["name"]
    list_filter = ["users"]
    filter_horizontal = ('users',)

admin.site.register(Groups, GroupsAdmin)