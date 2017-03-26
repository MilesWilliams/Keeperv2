from rest_framework.serializers import ModelSerializer, StringRelatedField, ImageField

from Project.models import Projects, SubProject
from Tasks.api.serializers import TasksSerializer
from Organizations.api.serializers import GroupSerializer
from drf_extra_fields.fields import Base64ImageField

class SubProjectSerializer(ModelSerializer):
    """
    The SubProject model serializer
    """
    subprojecttasks = TasksSerializer(many=True, read_only=False)
    groups = GroupSerializer(many=True, read_only=False)
    class Meta:
        """
        The SubProject model fields
        """
        model = SubProject
        fields = (
            'id',
            'completed',
            'completed_on',
            'name',
            'date',
            'projects',
            'subprojecttasks',
            'groups',
            'users',

        )

class ProjectsSerializer(ModelSerializer):
    """
    The todo projects serializer
    """
    project_image = Base64ImageField(required=False)
    subprojects = SubProjectSerializer(many=True, read_only=False, required=False)
    projecttasks = TasksSerializer(many=True, read_only=False, required=False)
    groups = GroupSerializer(many=True, read_only=False, required=False)
    class Meta:
        """
        The Project model fields
        """
        model = Projects
        fields = (
            'id',
            'name',
            'completed',
            'completed_on',
            'date',
            'project_image',
            'description',
            'subprojects',
            'projecttasks',
            'github_url',
            'organization',
            'groups',
            'users',
            'project_type',
            'project_status',
        )
