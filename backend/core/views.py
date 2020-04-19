from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework import viewsets, status, authentication
from core import serializers
from . import models


class UserAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):

        permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class MembersAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MembersSerializer
    # queryset = UserProfile.objects.all()

    def get_queryset(self):
        id = self.request.user.id
        single_user = self.request.query_params.get('username', None)
        if single_user:
            member = models.Member.objects.filter(user__username=single_user)
        else:
            member = models.Member.objects.all()
        return member

    def get_permissions(self):
        permission_classes = [IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]


class EventAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventsSerializer
    queryset = models.Event.objects.all()

    def get_permissions(self):

        permission_classes = [IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]


class TaskAPIViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.TaskSerializer
    queryset = models.Task.objects.all()

    def get_permissions(self):

        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class SkillAPIViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SkillsSerializer
    queryset = models.Skill.objects.all()

    def get_permissions(self):

        permission_classes = [IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]
