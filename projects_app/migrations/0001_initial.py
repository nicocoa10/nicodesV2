# Generated by Django 3.2.4 on 2021-06-18 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=240)),
                ('date', models.DateField()),
                ('description', models.CharField(max_length=240)),
                ('link', models.URLField()),
            ],
        ),
    ]
