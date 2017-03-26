from django.conf.urls import include, url
from django.contrib import admin

from .views import (
		ProjectsCreateView,
		ProjectsDeleteView,
		ProjectsDetailView,
		ProjectsUpdateView,
		ProjectsListView,

		SubProjectCreateView,
		SubProjectDeleteView,
		SubProjectListView,
		SubProjectUpdateView,
		SubProjectDetailByProjectView,
	)

urlpatterns = [
		  url(r'^$', ProjectsListView.as_view(), name='projects'),
		  url(r'^(?P<pk>\d+)/$', ProjectsDetailView.as_view(), name='detail'),
		  url(r'^create$', ProjectsCreateView.as_view(), name='create'),
		  url(r'^delete/(?P<pk>\d+)/$', ProjectsDeleteView.as_view(), name='delete'),
		  url(r'^update/(?P<pk>\d+)/$', ProjectsUpdateView.as_view(), name='update'),

		  url(r'^sub-projects/$', SubProjectListView.as_view(), name='sub-projects'),
		  url(r'^sub-projects/project/$', SubProjectDetailByProjectView.as_view(), name='sub-projectdetail'),
		  url(r'^sub-projects/create$', SubProjectCreateView.as_view(), name='sub-projects-create'),
		  url(r'^sub-projects/delete/(?P<pk>\d+)/$', SubProjectDeleteView.as_view(), name='sub-projects-delete'),
		  url(r'^sub-projects/edit/(?P<pk>\d+)/$', SubProjectUpdateView.as_view(), name='sub-projects-edit'),
]
