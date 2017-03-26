from rest_framework.serializers import ModelSerializer, StringRelatedField, ImageField, FileField, SerializerMethodField
from Tasks.models import Tasks, Images, Files

from Organizations.api.serializers import GroupSerializer, UserSerializer
class FileSerializer(ModelSerializer):
    """
    The file model serializer
    """
    file_url = FileField(max_length=None, use_url=True)
    file_id = SerializerMethodField()
    class Meta:
        """
        The file model fields
        """
        model = Files
        fields = [
            'file_id',
            'task',
            'file_url',
        ]

    def get_file_id(self, obj):
        """
        The File model id
        """
        return obj.id

class ImageSerializer(ModelSerializer):
    """
    The image model serializer
    """
    image_url = ImageField(max_length=None, use_url=True)
    image_id = SerializerMethodField()
    class Meta:
        """
        The image model fields
        """
        model = Images
        fields = [
            'image_id',
            'task',
            'image_url',
        ]

    def get_image_id(self, obj):
        """
        The image model id
        """
        return obj.id

class TasksSerializer(ModelSerializer):
    """
    The task model serializer
    """
    taskimages = ImageSerializer(many=True, read_only=True)
    taskfiles = FileSerializer(many=True, read_only=True)
    # organization = OrganizationSerializer(read_only=True)
    group = GroupSerializer(read_only=True)
    users = UserSerializer(many=True, read_only=True)
    class Meta:
        """
        The task model fields
        """
        model = Tasks
        fields = [
            'id',
            'title',
            'due_date',
            'completed',
            'completed_on',
            'notes',
            'project',
            'sub_project',
            'taskimages',
            'taskfiles',
            'organization',
            'group',
            'users',
        ]

        # def __init__(self, )

