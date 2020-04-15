from django.contrib import admin
from . import models

# Register your models here.


class MembersAdminView(admin.ModelAdmin):
    list_display = ('user', 'year', 'branch', 'phone_number')
    list_display_links = ('user', 'year', 'branch', 'phone_number')
    search_fields = ('user', 'year', 'branch', 'phone_number', 'description', 'skills', 'tagline')
    list_filter = ('user', 'year', 'skills', 'branch')

    list_max_show_all = 100

class EventsAdminView(admin.ModelAdmin):
    list_display = ('name', 'date_time', 'venue', 'entry_fee')
    list_display_links = ('name',)
    list_editable = ('date_time', 'venue', 'entry_fee')
    search_fields = ('name', 'venue', 'date_time', 'details', 'entry_fee')
    list_filter = ('date_time', 'venue', 'entry_fee')

    list_max_show_all = 100

class TasksAdminView(admin.ModelAdmin):
    list_display = ('name', 'deadline', 'submit_info')
    list_display_links = ('name',)
    list_editable = ('deadline',)
    search_fields = ('name', 'submit_info', 'deadline')
    list_filter = ('name', 'submit_info', 'deadline')

    list_max_show_all = 100


admin.site.register(models.Skill)
admin.site.register(models.Event, EventsAdminView)
admin.site.register(models.Member, MembersAdminView)
admin.site.register(models.Task,TasksAdminView)
