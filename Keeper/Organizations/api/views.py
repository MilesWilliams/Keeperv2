from Organizations.models import Organizations, Users, Groups
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
)
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin
from rest_framework.filters import (
    SearchFilter,
)
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticatedOrReadOnly,
)
from .serializers import (
    GroupSerializer,
    UsersSerializer,
    OrganizationSerializer,
    AllGroupsSerializer,
    )

from .permissions import IsOwnerOrReadOnly


class OrganizationListView(ListAPIView):
    """
    Organization list view
    """
    queryset = Organizations.objects.all()
    serializer_class = OrganizationSerializer

class GroupCreateView(CreateAPIView):
    """
    Group create view
    """
    queryset = Groups.objects.all()
    serializer_class = GroupSerializer

    def put(self, request, *args, **kwargs):

        return self.create(request, *args, **kwargs)

class GroupDeleteView(DestroyAPIView):
    """
    Group delete view
    """
    queryset = Groups.objects.all()
    serializer_class = GroupSerializer

class GroupsListView(ListAPIView):
    """
    Group list view
    """
    queryset = Groups.objects.all()
    serializer_class = AllGroupsSerializer

class GroupUpdateView(DestroyModelMixin, UpdateModelMixin, RetrieveAPIView):
    """
    Group Update view
    """
    queryset = Groups.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):

        return self.update(request, *args, **kwargs)

class GroupRetrieveView(RetrieveAPIView):
    """
    Single Group Detail view
    """
    queryset = Groups.objects.all()
    serializer_class = GroupSerializer


class UsersCreateView(CreateAPIView):
    """
    Users create view
    """
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class UsersDeleteView(DestroyAPIView):
    """
    Users delete view
    """
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class UsersListView(ListAPIView):
    """
    Users list view
    """
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    filter_backends = [SearchFilter]
    search_fields = ['email']

class UsersUpdateView(DestroyModelMixin, UpdateModelMixin, RetrieveAPIView):
    """
    Users update view
    """
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class UsersRetrieveView(RetrieveAPIView):
    """
    Single Users detail view
    """
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
