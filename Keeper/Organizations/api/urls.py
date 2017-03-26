from django.conf.urls import include, url
from django.contrib import admin

from .views import (
    OrganizationOwnerListView,
    OrganizationListView,
    GroupCreateView,
    GroupDeleteView,
    GroupsListView,
    GroupRetrieveView,
    GroupUpdateView,
    UsersCreateView,
    UsersDeleteView,
    UsersListView,
    UsersRetrieveView,
    UsersUpdateView,
    )

urlpatterns = [
    url(r'^owner$', OrganizationOwnerListView.as_view(), name='owner'),
    url(r'^$', OrganizationListView.as_view(), name='organization'),
    url(r'^groups$', GroupsListView.as_view(), name='groups'),
    url(r'^groups/(?P<pk>\d+)$', GroupRetrieveView.as_view(), name='group-detail'),
    url(r'^groups/create', GroupCreateView.as_view(), name='group-create'),
    url(r'^groups/delete/(?P<pk>\d+)$', GroupDeleteView.as_view(), name='group-delete'),
    url(r'^groups/update/(?P<pk>\d+)$', GroupUpdateView.as_view(), name='group-update'),
    url(r'^users$', UsersListView.as_view(), name='users'),
    url(r'^users/(?P<pk>\d+)$', UsersRetrieveView.as_view(), name='users-detail'),
    url(r'^users/create', UsersCreateView.as_view(), name='users-create'),
    url(r'^users/delete/(?P<pk>\d+)$', UsersDeleteView.as_view(), name='users-delete'),
    url(r'^users/update/(?P<pk>\d+)$', UsersUpdateView.as_view(), name='users-update'),

]
