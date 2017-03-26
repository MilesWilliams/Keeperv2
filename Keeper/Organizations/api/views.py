from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
)
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from django.contrib.auth.models import User
from Organizations.models import Organizations, Users, Groups
from .serializers import UserSerializer, OrganizationSerializer, GroupSerializer, UsersSerializer



class OrganizationOwnerListView(ListAPIView):
    """
    Organization Owner list view
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
    permission_classes = [AllowAny]

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
    serializer_class = GroupSerializer

class GroupUpdateView(UpdateAPIView):
    """
    Group Update view
    """
    queryset = Groups.objects.all()
    serializer_class = GroupSerializer

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

class UsersUpdateView(UpdateAPIView):
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
