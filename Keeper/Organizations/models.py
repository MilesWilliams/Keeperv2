from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Organizations(models.Model):
    """
    Organization model
    """
    organization_logo = models.ImageField("Organization Logo", blank=True, null=True,
                                          width_field="width_field", height_field="height_field",
                                          upload_to="Images/")
    width_field = models.IntegerField(default=0)
    height_field = models.IntegerField(default=0)
    name = models.CharField("Organization Name", max_length=150, blank=False, null=False,
                            default=None)
    description = models.TextField("Description", default=None)
    created_on = models.DateField("Created on", default=timezone.now)
    organization_owner = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Organization"
        verbose_name_plural = "Organizations"

class Users(models.Model):
    """
    Custom user model
    """
    SUPERUSER = 'SU'
    ADMIN = 'AD'
    USER = 'US'
    user_avatar = models.ImageField("Avatar", blank=True, null=True,
                                    width_field="width_field", height_field="height_field",
                                    upload_to="Images/Avatars", default=None)
    width_field = models.IntegerField(default=0)
    height_field = models.IntegerField(default=0)
    first_name = models.CharField("First Name", max_length=150, default=None)
    last_name = models.CharField("Surname", max_length=200, default=None)
    email_address = models.EmailField("Email Address", max_length=100, default=None)
    organizations = models.ForeignKey(Organizations, related_name="Organization_Users")
    password = models.CharField('Password', max_length=20, default='password')
    user_type_choices = (
        (SUPERUSER, 'Super User'),
        (ADMIN, 'Admin'),
        (USER, 'User')
    )
    user_type = models.CharField("User Type", choices=user_type_choices, default=USER,
                                 max_length=10)


    def __str__(self):
        return self.first_name + ' ' + self.last_name

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

class Groups(models.Model):
    group_image = models.ImageField("Group Logo", blank=True, null=True,
                                    width_field="width_field", height_field="height_field",
                                    upload_to="Images/Groups", default=None)
    width_field = models.IntegerField(default=0)
    height_field = models.IntegerField(default=0)
    name = models.CharField("Group Name", max_length=150, blank=False, null=False, default=None)
    description = models.TextField("Group Description", default=None, blank=True, null=True)
    organizations = models.ForeignKey(Organizations, related_name='Organization')
    users = models.ManyToManyField(Users, related_name="Group_Users", blank=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Group"
        verbose_name_plural = "Groups"

