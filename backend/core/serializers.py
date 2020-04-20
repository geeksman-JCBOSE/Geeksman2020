from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="user-detail")

    class Meta:
        model = User
        fields = "__all__"


class MembersSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="member-detail")
    user = UserSerializer(many=False)

    class Meta:
        model = models.Member
        fields = "__all__"


class SkillsSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="skill-detail")

    class Meta:
        model = models.Skill
        fields = "__all__"


class EventsSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="event-detail")

    class Meta:
        model = models.Event
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="task-detail")
    skills = SkillsSerializer(many=True)

    class Meta:
        model = models.Task
        fields = "__all__"
