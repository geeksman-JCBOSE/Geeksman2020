from django.contrib import admin
from . import models
from import_export.admin import ImportExportModelAdmin, ImportExportActionModelAdmin
admin.site.site_header = 'GEEKSMAN'
# Register your models here.


class MembersAdminView(ImportExportModelAdmin, ImportExportActionModelAdmin):
    list_display = ('user', 'year', 'branch', 'phone_number', 'position')
    list_display_links = ('user', 'year', 'branch', 'phone_number')
    search_fields = ('user', 'year', 'branch', 'phone_number', 'description', 'skills', 'tagline', 'position')
    list_filter = ('year', 'skills', 'branch', 'position')

    list_max_show_all = 100


class EventsAdminView(ImportExportModelAdmin, ImportExportActionModelAdmin):
    list_display = ('name', 'date_time', 'venue', 'entry_fee')
    list_display_links = ('name',)
    list_editable = ('date_time', 'venue', 'entry_fee')
    search_fields = ('name', 'venue', 'date_time', 'details', 'entry_fee')
    list_filter = ('date_time', 'venue', 'entry_fee')

    list_max_show_all = 100


class TasksAdminView(ImportExportModelAdmin, ImportExportActionModelAdmin):
    list_display = ('name', 'deadline', 'submit_info')
    list_display_links = ('name',)
    list_editable = ('deadline',)
    search_fields = ('name', 'submit_info', 'deadline')
    list_filter = ('submit_info', 'deadline')

    list_max_show_all = 100


admin.site.register(models.Skill)
admin.site.register(models.Event, EventsAdminView)
admin.site.register(models.Member, MembersAdminView)
admin.site.register(models.Task,TasksAdminView)
