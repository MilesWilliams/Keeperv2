from django.db import models
from Project.models import Projects, SubProject
from Organizations.models import Organizations, Groups, Users
# Create your models here.

class Tasks(models.Model):
    """
    The task model
    """
    completed = models.BooleanField(default=False)
    completed_on = models.DateTimeField(blank=True, null=True)
    title = models.CharField("Task Title", max_length=150, default=None, unique=False)
    due_date = models.DateField("Due Date", null=True, blank=True)
    notes = models.TextField("Task Notes", null=True, blank=True)
    project = models.ForeignKey(Projects, null=True, blank=True, related_name="projecttasks")
    sub_project = models.ForeignKey(SubProject, null=True, blank=True,
                                    related_name="subprojecttasks")
    group = models.ForeignKey(Groups, blank=True, null=True, default=None)
    organization = models.ForeignKey(Organizations, blank=False, null=False)
    users = models.ManyToManyField(Users, blank=True, default=None)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Task"
        verbose_name_plural = "Tasks"


def get_image_filename(instance, filename):
    """
    Get the image filename
    """
    title = instance.task.title
    return "Images/" + title + "/%s" % (filename)

def get_file_filename(instance, filename):
    """
    The file filename
    """
    title = instance.task.title
    return "Files/" + title + "/%s" % (filename)


class Images(models.Model):
    """
    The image model
    """
    task = models.ForeignKey(Tasks, blank=True, null=True, default=None, related_name="taskimages")
    image_url = models.ImageField("Task Image", blank=True, null=True,
                                  width_field="width_field", height_field="height_field",
                                  upload_to=get_image_filename
                                 )
    width_field = models.IntegerField(default=0)
    height_field = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Image"
        verbose_name_plural = "Image"

class Files(models.Model):
    """
    The file model
    """
    task = models.ForeignKey(Tasks, blank=True, null=True, default=None, related_name="taskfiles")
    file_url = models.FileField("Task File", blank=True, null=True, upload_to=get_file_filename)

    class Meta:
        verbose_name = "File"
        verbose_name_plural = "Files"