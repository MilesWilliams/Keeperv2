from django.db.models import Q

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
    )

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from Project.models import Projects, SubProject
from .serializers import ProjectsSerializer, SubProjectSerializer


class ProjectsCreateView(CreateAPIView):
    """
    em
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProjectsDeleteView(DestroyAPIView):
    """
    em
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class ProjectsDetailView(RetrieveAPIView):
    """
    em
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class ProjectsListView(ListAPIView):
    """
    em
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

    filter_backends = [SearchFilter]
    search_fields = ['name']

    def get_queryset(self, *args, **kwargs):
        queryset_list = Projects.objects.all()

        query = self.request.GET.get('q')
        if query:
            queryset_list = queryset_list.filter(
                Q(name=query),
            ).distinct()
        return queryset_list


class ProjectsUpdateView(RetrieveUpdateAPIView):
    """
    em
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [AllowAny]

class SubProjectCreateView(CreateAPIView):
    """
    em
    """
    queryset = SubProject.objects.all()
    serializer_class = SubProjectSerializer

class SubProjectDeleteView(DestroyAPIView):
    """
    em
    """
    queryset = SubProject.objects.all()
    serializer_class = SubProjectSerializer

class SubProjectListView(ListAPIView):
    """
    em
    """
    queryset = SubProject.objects.all()
    serializer_class = SubProjectSerializer

class SubProjectDetailByProjectView(ListAPIView):
    """
    em
    """
    serializer_class = SubProjectSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = SubProject.objects.all()
        filter_backends = [SearchFilter, OrderingFilter]
        search_fields = ['projects']
        query = self.request.GET.get('q')
        if query:
            queryset_list = queryset_list.filter(
                Q(projects=query)
            ).distinct()
        return queryset_list


class SubProjectUpdateView(RetrieveUpdateAPIView):
    """
    em
    """
    queryset = SubProject.objects.all()
    serializer_class = SubProjectSerializer
