from django.db import models
from django.utils import timezone
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager


# Create your models here.


class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        # Ensure that an email address is set
        if not email:
            raise ValueError('Users must have a valid e-mail address')

        # Ensure that a username is set
        if not kwargs.get('username'):
            raise ValueError('Users must have a valid username')

        account = self.model(
            email=self.normalize_email(email),
            organizations=kwargs.get('organizations'),
            username=kwargs.get('username'),
            firstname=kwargs.get('firstname', None),
            lastname=kwargs.get('lastname', None),
        )

        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password=None, **kwargs):
        account = self.create_user(email, password, kwargs)

        account.is_admin = True
        account.save()

        return account

class Users(AbstractBaseUser, PermissionsMixin):
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
    username = models.CharField(unique=True, max_length=50)
    firstname = models.CharField("First Name", max_length=150, default=None)
    lastname = models.CharField("Surname", max_length=200, default=None)
    email = models.EmailField("Email Address", max_length=100, default=None, unique=True)
    # organizations = models.ForeignKey(Organizations, related_name="Organization_Users")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)
    objects = AccountManager()

    user_type_choices = (
        (SUPERUSER, 'Super User'),
        (ADMIN, 'Admin'),
        (USER, 'User')
    )
    user_type = models.CharField("User Type", choices=user_type_choices, default=USER,
                                 max_length=10)

    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['username']

    def get_full_name(self):
        # The user is identified by their email address
        return self.firstname + ' ' + self.lastname

    def get_short_name(self):
        # The user is identified by their email address
        return self.email

    def __str__(self):
        return self.firstname + ' ' + self.lastname

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        if(self.is_admin):
            return True
        
        if(self.pk==1):
            return True

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"


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
    organization_owner = models.OneToOneField(Users, on_delete=models.CASCADE, blank=True, null=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Organization"
        verbose_name_plural = "Organizations"

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

