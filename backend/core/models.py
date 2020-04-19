from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Skills'
        ordering = ['name']

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
    github = models.URLField(max_length=1000, null=True, blank=True)
    linkedin = models.URLField(max_length=1000, null=True, blank=True)
    skills = models.ManyToManyField(Skill)
    status = models.CharField(max_length=1000, null=True)
    pos_choices = (
        ('1', 'Secretary'),
        ('2', 'Joint-Secretary'),
        ('3', 'Session Head'),
        ('4', 'Social Media Head'),
        ('5', 'Member'),
    )
    position = models.CharField(max_length=100, choices=pos_choices, default='5')

    class Meta:
        verbose_name_plural = 'Members'
        ordering = ['-year', 'position', 'user__first_name']

    def __str__(self):
        return self.user.username


class Event(models.Model):
    name = models.CharField(max_length=500)
    pic = models.URLField()
    date_time = models.DateTimeField()
    details = models.TextField()
    entry_fee = models.PositiveSmallIntegerField()
    venue = models.CharField(max_length=500, default=None)
    status_choices = (
        ('Upcoming', 'Upcoming'),
        ('Happened', 'Happened'),
    )
    status = models.CharField(choices=status_choices, max_length=100, default='Upcoming')

    class Meta:
        verbose_name_plural = 'Events'
        ordering = ['-date_time']


    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=1000)
    skills = models.ManyToManyField(Skill)
    deadline = models.DateTimeField()
    submit_info = models.TextField()

    class Meta:
        verbose_name_plural = 'Tasks'
        ordering = ['-deadline']

    def __str__(self):
        return self.name

