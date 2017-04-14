from django.contrib.auth import update_session_auth_hash, authenticate
from django.contrib.auth.models import User
from django.db.models import Q
import jwt

from rest_framework_jwt.settings import api_settings

from rest_framework import serializers
from rest_framework.serializers import (
    ModelSerializer,
    StringRelatedField,
    EmailField,
    SerializerMethodField,
    ValidationError,
    CharField,
    PrimaryKeyRelatedField
    )
from rest_framework.response import Response
from Organizations.models import Organizations, Users, Groups
from drf_extra_fields.fields import Base64ImageField

jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER

class UserSerializer(ModelSerializer):
    """
    Django admin User
    """
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            organizations=1
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class OrganizationSerializer(ModelSerializer):
    """
    Keeper Organization serializer
    """
    organization_owner = UserSerializer(read_only=True)
    class Meta:
        """
        The Project model fields
        """
        model = Organizations
        fields = (
            'id',
            'name',
            'created_on',
            'description',
            'organization_logo',
            'organization_owner',
        )

class UsersSerializer(ModelSerializer):
    """
    Keeper custome User model serializer
    """
    
    password = serializers.CharField(write_only=True, required=True)
    confirm_password = serializers.CharField(write_only=True, required=True)
    class Meta:
        """
        The Project model fields
        """
        model = Users
        fields = (
            'pk',
            'firstname',
            'lastname',
            'email',
            'username',
            'date_created',
            'date_modified',
            'user_avatar',
            'user_type',
            'password',
            'confirm_password',
        )
        read_only_fields = ('date_created', 'date_modified')
    
    def create(self, validated_data):
        return Users.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username',
                                                     instance.username)
        instance.firstname = validated_data.get('firstname',
                                                instance.firstname)
        instance.lastname = validated_data.get('lastname',
                                               instance.lastname)

        password = validated_data.get('password', None)
        confirm_password = validated_data.get('confirm_password', None)

        if password and password == confirm_password:
            instance.set_password(password)

        instance.save()
        return instance

    def validate(self, data):
        '''
        Ensure the passwords are the same
        '''
        if data['password']:
            print("Here")
            if data['password'] != data['confirm_password']:
                raise ValidationError(
                    "The passwords have to be the same"
                )
        return data



class GroupSerializer(ModelSerializer):
    """
    Keeper Group serializer
    """
    # organizations = OrganizationSerializer(read_only=True)
    users = PrimaryKeyRelatedField(many=True, queryset=Users.objects.all())
    group_image = Base64ImageField(required=False)
    project_groups = StringRelatedField(many=True, required=False)
    class Meta:
        """
        The Project model fields
        """
        model = Groups
        fields = (
            'id',
            'name',
            'description',
            'group_image',
            'organizations',
            'project_groups',
            'users',
        )

        