from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.name

class Member(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pic = models.URLField(max_length=1000)
    tagline = models.CharField(max_length=1000,default=None)
    year = models.PositiveSmallIntegerField()
    branch = models.CharField(max_length=100, default=None)
    address = models.CharField(max_length=1000, default=None)
    description = models.TextField(default=None)
    phone_number = models.BigIntegerField(default=None)
    github = models.URLField(max_length=1000)
    linkedin = models.URLField(max_length=1000)
    gfg = models.URLField(max_length=1000)
    codechef = models.URLField(max_length=1000)
    skills = models.ManyToManyField(Skill)

    class Meta:
        verbose_name_plural = 'Members'

    def __str__(self):
        return self.user.username


class Event(models.Model):
    name = models.CharField(max_length=500)
    pic = models.URLField()
    date_time = models.DateTimeField()
    details = models.TextField()
    entry_fee = models.PositiveSmallIntegerField()
    venue = models.CharField(max_length=500, default=None)

    class Meta:
        verbose_name_plural = 'Events'

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=1000)
    deadline = models.DateTimeField()
    submit_info = models.TextField()

    class Meta:
        verbose_name_plural = 'Tasks'

    def __str__(self):
        return self.name

