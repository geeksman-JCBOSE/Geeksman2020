from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework import viewsets, status
from core import serializers
from . import models


class UserAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):

        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]


class MembersAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MembersSerializer
    # queryset = UserProfile.objects.all()

    def get_queryset(self):
        member = models.Member.objects.all()
        username = self.request.query_params.get('username', None)
        if username:
            member = models.Member.objects.filter(user_username=username)
        return member

    def get_permissions(self):
        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]


class EventAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventsSerializer
    queryset = User.objects.all()

    def get_permissions(self):

        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]


class TaskAPIViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.TaskSerializer
    queryset = models.Task.objects.all()

    def get_permissions(self):

        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]


class SkillAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SkillsSerializer
    queryset = models.Skill.objects.all()

    def get_permissions(self):

        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]
