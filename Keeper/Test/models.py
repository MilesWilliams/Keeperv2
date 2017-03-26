from django.db import models
from django.utils import timezone

# Create your models here.
class SubProject(models.Model):
	# project = models.ForeignKey(Projects)
	name = models.CharField("Sub-project Name", max_length=200)
	date = models.DateField("Completion Date", default=timezone.now, blank=True)

	def __str__(self):
		return self.name
		
class Projects(models.Model):
	name = models.CharField("Project Name", max_length=150, blank=False)
	date = models.DateField("Completion Date", default=timezone.now, blank=True)
	project_image = models.ImageField("Project Image", blank=True, null=True,
                              width_field="width_field", height_field="height_field")
	width_field = models.IntegerField(default=0)
	height_field = models.IntegerField(default=0)
	description = models.TextField('Project Description')
	github_url = models.CharField("Github Repo Url", max_length=200, blank=True, null=True)
	sub_project = models.ForeignKey(SubProject, blank=True, null=True)

	def __str__(self):
		return self.name


