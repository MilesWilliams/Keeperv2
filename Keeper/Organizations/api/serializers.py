from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, StringRelatedField, ImageField
from Organizations.models import Organizations, Users, Groups
from drf_extra_fields.fields import Base64ImageField

class UserSerializer(ModelSerializer):
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
            last_name=validated_data['last_name']
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
    Keeper User serializer
    """
    organizations = OrganizationSerializer(read_only=True)
    class Meta:
        """
        The Project model fields
        """
        model = Users
        fields = (
            'id',
            'first_name',
            'last_name',
            'email_address',
            'organizations',
            'user_avatar',
            'user_type',
        )


class GroupSerializer(ModelSerializer):
    """
    Keeper Group serializer
    """
    # organizations = OrganizationSerializer(read_only=True)
    users = UsersSerializer(many=True, read_only=False)
    group_image = Base64ImageField(required=False)
    project_groups = StringRelatedField(many=True)
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

