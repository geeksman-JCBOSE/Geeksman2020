# Generated by Django 2.2 on 2020-04-15 00:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='skill',
            options={'verbose_name_plural': 'Skills'},
        ),
        migrations.RenameField(
            model_name='event',
            old_name='entryfee',
            new_name='entry_fee',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='submitinfo',
            new_name='submit_info',
        ),
    ]