from django.db.models import Q
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.filters import (
    SearchFilter,
)

from Tasks.models import Tasks, Images
from Organizations.models import Organizations
from .serializers import TasksSerializer, ImageSerializer


class TaskCreateView(CreateAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        self.organization = 1
        return self.create(request, *args, **kwargs)

class TaskDeleteView(DestroyAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer

class TaskDetailView(RetrieveAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer

class TaskDetailByCompletedView(ListAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    filter_backends = [SearchFilter]
    search_fields = ['project', 'completed']

    # def get_queryset(self, *args, **kwargs):
    #     queryset_list = Tasks.objects.all()
    #     filter_backends = [SearchFilter]
    #     search_fields = ['work']
    #     query = self.request.GET.get('q')
    #     if query:
    #         queryset_list = queryset_list.filter(
    #             Q(completed=query),
	# 			Q(project=query),
    #         ).distinct()
    #     return queryset_list


class TaskListApiView(ListAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    filter_backends = [SearchFilter]
    search_fields = ['due_date',]

class TaskUpdateApiView(DestroyModelMixin, UpdateModelMixin, RetrieveAPIView):
    """
    em
    """
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class ImageUploadView(CreateAPIView):
    """
    em
    """
    queryset = Images.objects.all()
    serializer_class = ImageSerializer

class ImageDeleteView(DestroyAPIView):
    """
    em
    """
    queryset = Images.objects.all()
    serializer_class = ImageSerializer

class ImageDetailView(RetrieveAPIView):
    """
    em
    """
    queryset = Images.objects.all()
    serializer_class = ImageSerializer
	