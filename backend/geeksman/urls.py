from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from core import views as coreviews

router = DefaultRouter()
router.register('users', coreviews.UserAPIViewSet, basename='user')
router.register('members', coreviews.MembersAPIViewSet, basename='member')
router.register('events', coreviews.EventAPIViewSet, basename='event')
router.register('tasks', coreviews.TaskAPIViewSet, basename='task')
router.register('skills', coreviews.SkillAPIViewSet, basename='skill')





urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls), name='api'),
    path('api-token-auth/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls')),


]
