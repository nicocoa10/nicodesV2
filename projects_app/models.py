from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Project(models.Model):
    type = models.CharField(max_length=240)
    date = models.DateField()
    description = models.CharField(max_length=240)
    link = models.URLField()